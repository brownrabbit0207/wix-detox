//
//  TimeInterval+DetoxUtils.swift
//  Detox
//
//  Created by Leo Natan (Wix) on 5/12/20.
	func toSeconds() -> TimeInterval {
		return self / 1000.0
	}
}

extension TimeInterval {
	func toMilliseconds() -> Double {
		return self * 1000.0
	}
}
