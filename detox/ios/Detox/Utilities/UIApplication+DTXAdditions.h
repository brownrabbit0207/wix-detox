//
// Copyright 2016 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
 *  EarlGrey specific additions for tracking runloop mode changes and user interaction events.
 */
@interface UIApplication (DTXAdditions)

/**
 * @return Active mode for the main runloop that was pushed by one of the push runloop methods.
 *         May return @c nil when no mode was pushed.
 */
- (NSString *_Nullable)dtx_activeRunLoopMode;

+ (CGFloat)dtx_panVelocity;

@end

NS_ASSUME_NONNULL_END
