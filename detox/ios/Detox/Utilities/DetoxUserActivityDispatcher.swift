//
//  DetoxUserActivityDispatcher.swift
//  Detox
//
//  Created by Leo Natan (Wix) on 3/15/18.
//  Copyright © 2018 Wix. All rights reserved.
//

import UIKit

private struct DetoxUserActivityKeys {
	static let activityType = "activityType"
	static let userInfo = "userInfo"
	static let webpageURL = "webpageURL"
	static let referrerURL = "referrerURL"
}

@objc(DTXUserActivityDispatcher)
public class DetoxUserActivityDispatcher: NSObject {
	@objc let userActivityData : [String: Any]
	
	@objc(initWithUserActivityDataURL:)
	public init(userActivityDataUrl: URL) {
		userActivityData = DetoxUserActivityDispatcher.parseUserActivityData(url: userActivityDataUrl)
		
			
			var value : Any = $1
			if $0 == "referrerURL" || $0 == "webpageURL" {
				value = URL(string: $1 as! String)!
			}
			
			rv.setValue(value, forKey: $0)
		}
		
		return rv
	}()
	
	@objc(dispatchOnAppDelegate:)
	public func dispatch(on appDelegate: UIApplicationDelegate) {
		let userActivity = self.userActivity
		
		_ = appDelegate.application?(UIApplication.shared, willContinueUserActivityWithType: userActivity.activityType)
		_ = appDelegate.application?(UIApplication.shared, continue: userActivity) { objects in }
	}
}
