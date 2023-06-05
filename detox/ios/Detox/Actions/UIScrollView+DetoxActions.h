//
//  UIScrollView+DetoxActions.h
//  Detox
//
//  Created by Leo Natan (Wix) on 4/20/20.

@interface UIScrollView (DetoxActions)

- (void)dtx_scrollToEdge:(UIRectEdge)edge NS_SWIFT_NAME(dtx_scroll(to:));
- (void)dtx_scrollWithOffset:(CGPoint)offset;
- (void)dtx_scrollWithOffset:(CGPoint)offset normalizedStartingPoint:(CGPoint)normalizedStartingPoint NS_SWIFT_NAME(dtx_scroll(withOffset:normalizedStartingPoint:));

@end

NS_ASSUME_NONNULL_END
