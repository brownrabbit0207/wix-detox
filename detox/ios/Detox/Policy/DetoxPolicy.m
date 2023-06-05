//
//  DetoxPolicy.m
//  Detox
//
//  Created by Leo Natan on 9/15/20.

+ (CGFloat)visibilityPixelAlphaThreshold {
	return 0.5;
}

+ (NSUInteger)defaultPercentThresholdForVisibility {
	return 75;
}

+ (NSUInteger)consecutiveTouchPointsWithSameContentOffsetThreshold {
	return 12;
}

+ (NSString*)percentDescriptionForPercent:(CGFloat)percent {
	return [NSString stringWithFormat:@"%g%%", percent];
}

@end
