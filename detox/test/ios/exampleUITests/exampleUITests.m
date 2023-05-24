//
//  exampleUITests.m
//  exampleUITests
//
//  Created by Leo Natan (Wix) on 5/7/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import <XCTest/XCTest.h>

@interface exampleUITests : XCTestCase

@end

@implementation exampleUITests
    XCUIApplication *app = [[XCUIApplication alloc] init];
    [app launch];

	[NSThread sleepForTimeInterval:1];
	
	[app.otherElements[@"Matchers"] tap];
	
	[NSThread sleepUntilDate:NSDate.distantFuture];
}

@end
