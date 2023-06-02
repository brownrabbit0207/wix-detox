//
//  DTXAssertionHandler+Swift.swift
//  Detox
//
//  Created by Leo Natan (Wix) on 4/30/20.
//  Copyright © 2020 Wix. All rights reserved.
//

import UIKit

@inline(__always)
func dtx_try_nothrow(_ block: () -> Void) -> Bool {
	do {
		try DTXAssertionHandler.__try(block)
		return true
	}
	catch {
		return false
	}
}

@inline(__always)
func dtx_try(_ block: () -> Void) throws {
	try DTXAssertionHandler.__try(block)
}
