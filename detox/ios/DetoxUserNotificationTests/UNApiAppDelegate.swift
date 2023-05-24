//
//  UNApiAppDelegate.swift
//  Detox
//
//  Created by Leo Natan (Wix) on 05/02/2017.
//  Copyright © 2017 Wix. All rights reserved.
//

import UIKit
import UserNotifications

@objc(UNApiAppDelegate)
class UNApiAppDelegate: TestableAppDelegate, UNUserNotificationCenterDelegate {
	var userNotificationWillPresentWasCalled = false
	var userNotificationdidReceiveWasCalled = false
		markUNApiCalled(notification: notification)
		
		if swallowActiveUserNotification {
			completionHandler([])
		} else {
			completionHandler([.alert, .badge, .sound])
		}
	}
	
	func userNotificationCenter(_ center: UNUserNotificationCenter, didReceive response: UNNotificationResponse, withCompletionHandler completionHandler: @escaping () -> Swift.Void) {
		userNotificationdidReceiveWasCalled = true
		markUNApiCalled(notification: response.notification)
	}
}
