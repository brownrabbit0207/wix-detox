//
//  UIView+DetoxSpeedup.m
//  Detox
//
//  Created by Leo Natan on 11/24/20.
//  Copyright © 2020 Wix. All rights reserved.
//

#import "UIView+DetoxSpeedup.h"

@interface NSObject ()

- (void)_setCaretBlinkAnimationEnabled:(BOOL)arg1;
- (void)setCaretBlinks:(BOOL)arg1;

@end

@interface UIScrollView ()

- (void)_hideScrollIndicators;
- (void)_hideScrollIndicator:(id)arg1 afterDelay:(NSTimeInterval)arg2 animated:(BOOL)arg3;

@end

@implementation UIView (DetoxSpeedup)
{
	[self _dtx_setCaretBlinks:NO];
}

@end

@interface UIScrollView (DetoxSpeedup) @end
@implementation UIScrollView (DetoxSpeedup)

+ (void)load
{
	@autoreleasepool {
		if([NSUserDefaults.standardUserDefaults boolForKey:@"detoxDisableAnimationSpeedup"] == NO)
		{
			NSError* error;
			DTXSwizzleMethod(self, @selector(_hideScrollIndicators), @selector(_dtx_hideScrollIndicators), &error);
			DTXSwizzleMethod(self, @selector(_hideScrollIndicator:afterDelay:animated:), @selector(_dtx_hideScrollIndicator:afterDelay:animated:), &error);
		}
	}
}

- (void)_dtx_hideScrollIndicators
{
	[[self valueForKey:@"horizontalScrollIndicator"] setAlpha:0.0];
	[[self valueForKey:@"verticalScrollIndicator"] setAlpha:0.0];
}

- (void)_dtx_hideScrollIndicator:(UIView*)arg1 afterDelay:(NSTimeInterval)arg2 animated:(BOOL)arg3
{
	[arg1 setAlpha:0.0];
}

@end
