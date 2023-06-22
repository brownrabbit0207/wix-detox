//
//  DetoxManager.swift
//  Detox
//
//  Created by Leo Natan (Wix) on 5/22/20.
//  Copyright © 2020 Wix. All rights reserved.
//

import UIKit
import DetoxSync
import LNViewHierarchyDumper

fileprivate let recordingManager : DetoxInstrumentsManager = {
	return DetoxInstrumentsManager()
}()

fileprivate let log = DetoxLog(category: "DetoxManager")

@objc(DTXDetoxManager)
public class DetoxManager : NSObject, WebSocketDelegate {
				let samplingIntervalDouble = UserDefaults.standard.double(forKey: "samplingInterval")
				props["samplingInterval"] = samplingIntervalDouble
			}
			
			self.handlePerformanceRecording(props: props, isFromLaunch: true, completionHandler: nil)
		}
	}
	
	private func safeSend(action: String, params: [String: Any] = [:], messageId: NSNumber) {
		DTXSyncManager.enqueueMainQueueIdleClosure {
			self.webSocket.sendAction(action, params: params, messageId: messageId)
		}
	}
	
	@objc
	private func appDidLaunch(_ note: Notification) {
		DTXSyncManager.enqueueMainQueueIdleClosure {
			self.isReady = true
			self.sendGeneralReadyMessage()
		}
	}
	
	@objc
	private func appDidEnterBackground(_ note: Notification) {
		var bgTask : UIBackgroundTaskIdentifier! = nil
		bgTask = UIApplication.shared.beginBackgroundTask(withName: "DetoxBackground") {
			UIApplication.shared.endBackgroundTask(bgTask)
		}
	}
	
	private func waitFor(applicationState: UIApplication.State, action: String, messageId: NSNumber) {
		var observer : NSObjectProtocol?
		
		let response : () -> Void = {
			self.safeSend(action: "\(action)Done", messageId: messageId)
			
			guard observer == nil else {
				NotificationCenter.default.removeObserver(observer!)
				observer = nil
				return
			}
		}
		
		guard UIApplication.shared.applicationState != applicationState else {
			response()
			return
		}
		
		let notificationName : NSNotification.Name
		switch  applicationState {
		case .active:
			notificationName = UIApplication.didBecomeActiveNotification
			break
		case .background:
			notificationName = UIApplication.didEnterBackgroundNotification
			break
		case .inactive:
			notificationName = UIApplication.willResignActiveNotification
		default:
			fatalError("Unknown application state \(applicationState)")
		}
		
		observer = NotificationCenter.default.addObserver(forName: notificationName, object: nil, queue: .main, using: { notification in
			DispatchQueue.main.async(execute: response)
		})
	}
	
	private func sendGeneralReadyMessage() {
		safeSend(action: "ready", messageId: -1000)
	}
	
	private func start() {
		start(synchronizationSettings: nil)
	}
	
	@objc(startWithSynchronizationSettings:)
	public func start(synchronizationSettings settings: [String: Any]?) {
		if let settings = settings {
			setSynchronizationSettings(settings, messageId: nil)
		}
		
		let options = UserDefaults.standard
		let detoxServer = options.string(forKey: "detoxServer") ?? "ws://localhost:8099"
		let detoxSessionId = options.string(forKey: "detoxSessionId") ?? Bundle.main.bundleIdentifier!
		
		webSocket.connect(toServer: URL(string: detoxServer)!, withSessionId: detoxSessionId)
	}
	
	private func handlePerformanceRecording(props: [String: Any]?, isFromLaunch launch: Bool, completionHandler: (() -> Void)?) {
		var completionBlocked = false
		
		if let props = props, let _ = props["recordingPath"] as? String {
			if launch {
				recordingManager.continueRecording(withConfiguration: props)
			} else {
				recordingManager.startRecording(withConfiguration: props)
			}
		} else {
			completionBlocked = true
			recordingManager.stopRecording { error in
				if let error = error {
					log.error("Error while stopping recording: \(error)")
				}
				
				if let completionHandler = completionHandler {
					if Thread.isMainThread {
						completionHandler()
					} else {
						DispatchQueue.main.async {
							completionHandler()
						}
					}
				}
			}
		}
		
		if completionBlocked == false {
			completionHandler?()
		}
	}
	
	private func stopAndCleanupRecording() {
		handlePerformanceRecording(props: nil, isFromLaunch: false, completionHandler: nil)
	}
	
	private func waitForRNLoad(withMessageId messageId: NSNumber) {
		ReactNativeSupport.waitForReactNativeLoad {
			self.isReady = true
			self.sendGeneralReadyMessage()
		}
	}
	
	@objc(notifyOnCrashWithDetails:)
	public func notifyOnCrash(details: [String: Any]) {
		log.error("App crashed: \(details["errorDetails"]!)")
		
		let semaphore = DispatchSemaphore(value: 1)
		
		recordingManager.stopRecording { error in
			semaphore.signal()
		}
		
		semaphore.wait()
		
		webSocket.sendAction("AppWillTerminateWithError", params: details, messageId: -10000)
	}
	
	private func setSynchronizationSettings(_ settings: [String: Any], messageId: NSNumber?) {
		settings.forEach { key, value in
			switch key {
			case "maxTimerWait":
				let maxTimerWait = (value as! NSNumber).doubleValue / 1000
				DTXSyncManager.maximumAllowedDelayedActionTrackingDuration = maxTimerWait
				DTXSyncManager.maximumTimerIntervalTrackingDuration = maxTimerWait
				return
			case "waitForDebugger":
				Thread.sleep(forTimeInterval: Double(truncating: value as! NSNumber) / 1000)
				return
			case "blacklistURLs":
				DTXSyncManager.urlBlacklist = value as! [String]
				DTXSyncManager.urlBlacklist = value as! [String]
				return
			case "enabled":
				DTXSyncManager.synchronizationDisabled = !((value as! NSNumber).boolValue)
				return
			default:
				log.error("Unknown synchronization setting received: \(key)")
				return
			}
		}
		
		if let messageId = messageId {
			safeSend(action: "setSyncSettingsDone", messageId: messageId)
		}
	}
	
	// MARK: WebSocketDelegate
	
	func webSocketDidConnect(_ webSocket: WebSocket) {
		if ReactNativeSupport.isReactNativeApp {
			isReady = true
			sendGeneralReadyMessage()
		}
	}
	
	func webSocket(_ webSocket: WebSocket, didFailWith error: Error) {
		log.error("Web socket failed to connect with error: \(error.localizedDescription)")
		
		DispatchQueue.main.asyncAfter(deadline: .now() + 1.0, execute: self.start)
	}
	
	func webSocket(_ webSocket: WebSocket, didReceiveAction type: String, params: [String : Any], messageId: NSNumber) {
		let done = "\(type)Done"
		
		switch type {
		case "testerDisconnected":
			stopAndCleanupRecording()
			return
		case "setRecordingState":
			handlePerformanceRecording(props: params, isFromLaunch: false) {
				self.safeSend(action: done, messageId: messageId)
			}
			return
		case "waitForActive":
			waitFor(applicationState: .active, action: type, messageId: messageId)
			return
		case "waitForBackground":
			waitFor(applicationState: .background, action: type, messageId: messageId)
			return
		case "waitForIdle":
			safeSend(action: done, messageId: messageId)
			return
		case "setSyncSettings":
			setSynchronizationSettings(params, messageId: messageId)
			return
		case "invoke":
			DTXSyncManager.enqueueMainQueueIdleClosure {
				InvocationManager.invoke(dictionaryRepresentation: params) { result, error in
					if let error = error {
						let params: NSMutableDictionary = ["details": error.localizedDescription]
