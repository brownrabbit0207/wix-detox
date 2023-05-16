//
//  NSObject+DetoxActions.h
//  Detox
//
//  Created by Leo Natan on 11/16/20.
//  Copyright © 2020 Wix. All rights reserved.
//

#import <Foundation/Foundation.h>

	NS_SWIFT_NAME(dtx_longPress(at:duration:target:normalizedTargetPoint:velocity:lastHoldDuration:));
- (void)dtx_swipeWithNormalizedOffset:(CGPoint)normalizedOffset velocity:(CGFloat)velocity NS_SWIFT_NAME(dtx_swipe(withNormalizedOffset:velocity:));
- (void)dtx_swipeWithNormalizedOffset:(CGPoint)normalizedOffset velocity:(CGFloat)velocity normalizedStartingPoint:(CGPoint)normalizedStartingPoint NS_SWIFT_NAME(dtx_swipe(withNormalizedOffset:velocity:normalizedStartingPoint:));
- (void)dtx_pinchWithScale:(CGFloat)scale velocity:(CGFloat)velocity angle:(CGFloat)angle;

- (void)dtx_clearText;
- (void)dtx_typeText:(NSString*)text;
- (void)dtx_typeText:(NSString*)text atTextRange:(nullable UITextRange*)textRange;
- (void)dtx_replaceText:(NSString*)text;
- (NSURL *)dtx_takeScreenshot:(nullable NSString*)name;;

@end

NS_ASSUME_NONNULL_END
