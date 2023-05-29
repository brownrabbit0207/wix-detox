//
//  NSObject+DetoxActions.m
//  Detox
//
//  Created by Leo Natan on 11/16/20.

@import Darwin;
@import AudioToolbox;

#import "DTXAppleInternals.h"
#import "DTXSyntheticEvents.h"
#import "NSURL+DetoxUtils.h"
#import "UIView+DetoxUtils.h"
#import "UIImage+DetoxUtils.h"

@implementation NSObject (DetoxActions)

- (void)dtx_tapAtAccessibilityActivationPoint
{
	[self dtx_tapAtPoint:self.dtx_accessibilityActivationPointInViewCoordinateSpace numberOfTaps:1];
}

- (void)dtx_tapAtAccessibilityActivationPointWithNumberOfTaps:(NSUInteger)numberOfTaps
{
	[self dtx_tapAtPoint:self.dtx_accessibilityActivationPointInViewCoordinateSpace numberOfTaps:numberOfTaps];
}

- (void)dtx_tapAtPoint:(CGPoint)point numberOfTaps:(NSUInteger)numberOfTaps
{
	if([self isKindOfClass:UISwitch.class] && numberOfTaps == 1)
	{
		//Attempt a long press on the switch, rather than tap.
		[self dtx_longPressAtPoint:point duration:0.7];
		return;
	}
	
	NSParameterAssert(numberOfTaps >= 1);
	
	UIView* view = self.dtx_view;
	UIWindow* window = view.window;
	CGPoint viewPoint = [self dtx_convertRelativePointToViewCoordinateSpace:point];
	
	[view dtx_assertHittableAtPoint:viewPoint];
	
	CGPoint windowPoint = [window convertPoint:viewPoint fromView:view];
	
	for (NSUInteger idx = 0; idx < numberOfTaps; idx++) {
		[DTXSyntheticEvents touchAlongPath:@[@(windowPoint)] relativeToWindow:window holdDurationOnFirstTouch:0.0 holdDurationOnLastTouch:0.0];
	}
}


- (void)dtx_longPressAtAccessibilityActivationPoint
{
	[self dtx_longPressAtAccessibilityActivationPointForDuration:1.0];
}

- (void)dtx_longPressAtAccessibilityActivationPointForDuration:(NSTimeInterval)duration
{
	[self dtx_longPressAtPoint:self.dtx_accessibilityActivationPointInViewCoordinateSpace duration:duration];
}

- (void)dtx_longPressAtPoint:(CGPoint)point duration:(NSTimeInterval)duration
{
	UIView* view = self.dtx_view;
	UIWindow* window = view.window;
	CGPoint viewPoint = [self dtx_convertRelativePointToViewCoordinateSpace:point];
	
	[view dtx_assertHittableAtPoint:viewPoint];

	CGPoint windowPoint = [window convertPoint:viewPoint fromView:view];
	[DTXSyntheticEvents touchAlongPath:@[@(windowPoint)] relativeToWindow:window holdDurationOnFirstTouch:0.0 holdDurationOnLastTouch:duration];
}

#define DTX_ENFORCE_NORMALIZED_STARTING_POINT(normalizedStartingPoint) \
if((isnan(normalizedStartingPoint.x) == NO && (normalizedStartingPoint.x < 0 || normalizedStartingPoint.x > 1)) || isnan(normalizedStartingPoint.y) == NO && (normalizedStartingPoint.y < 0 || normalizedStartingPoint.y > 1)) \
{ \
DTXAssert(NO, @"Bad normalized starting point provided."); \
}

- (void)dtx_longPressAtPoint:(CGPoint)normalizedPoint duration:(NSTimeInterval)duration thenDragToElement:(NSObject*)target normalizedTargetPoint:(CGPoint)normalizedTargetPoint velocity:(CGFloat)velocity thenHoldForDuration:(NSTimeInterval)lastHoldDuration
{
	NSParameterAssert(velocity > 0.0);
	DTX_ENFORCE_NORMALIZED_STARTING_POINT(normalizedPoint);
	DTX_ENFORCE_NORMALIZED_STARTING_POINT(normalizedTargetPoint);
	
	CGPoint calcNormalizedPoint = DTXCalcNormalizedPoint(normalizedPoint, self);
	CGPoint calcNormalizedTargetPoint = DTXCalcNormalizedPoint(normalizedTargetPoint, target);
	
	[self.dtx_view dtx_assertHittableAtPoint:[self.dtx_view.coordinateSpace convertPoint:calcNormalizedPoint fromCoordinateSpace:self.dtx_view.window.screen.coordinateSpace]];
	[target.dtx_view dtx_assertHittableAtPoint:[target.dtx_view.coordinateSpace convertPoint:calcNormalizedTargetPoint fromCoordinateSpace:target.dtx_view.window.screen.coordinateSpace]];
	
	// Converting end point to the window coordinate space of the view we are going to drag
	// Setting the startPoint for better code readbility
	CGPoint startPoint = calcNormalizedPoint;
	CGPoint endPoint = [self.dtx_view.window.coordinateSpace convertPoint:calcNormalizedTargetPoint fromCoordinateSpace:target.dtx_view.window.coordinateSpace];
	
	NSMutableArray<NSValue*>* points = [NSMutableArray new];
	
	// Add start point
	[points addObject:@(startPoint)];
	
	velocity = (UIApplication.dtx_panVelocity * velocity);
	// Find number of points appropriate for the speed
	CGFloat xDiff = endPoint.x - startPoint.x;
	CGFloat yDiff = endPoint.y - startPoint.y;
	NSInteger numOfPoints = lround(fmax(fabs(xDiff) / velocity, fabs(yDiff) / velocity));
	
	// Generate points in between
	CGFloat xDiffDelta = xDiff / numOfPoints;
	CGFloat yDiffDelta = yDiff / numOfPoints;
	for (NSUInteger idx = 1; idx < numOfPoints; idx++) {
		CGPoint point = CGPointMake(startPoint.x + idx * xDiffDelta, startPoint.y + idx * yDiffDelta);
		[points addObject:@(point)];
	}
	
	// Add end point
	[points addObject:@(endPoint)];
	
	[DTXSyntheticEvents touchAlongPath:points relativeToWindow:self.dtx_view.window holdDurationOnFirstTouch:duration holdDurationOnLastTouch:lastHoldDuration];
}

static CGPoint DTXCalcNormalizedPoint(CGPoint normalizedPoint, NSObject* element)
{
	UIWindow* window = element.dtx_view.window;
	UIView* view = element.dtx_view;
	
	CGRect safeBounds = element.dtx_safeAreaBounds;
	CGRect safeBoundsInScreenSpace = [window.screen.coordinateSpace convertRect:safeBounds fromCoordinateSpace:view.coordinateSpace];
	
	CGPoint activationPoint = element.dtx_accessibilityActivationPointInViewCoordinateSpace;
	CGPoint windowConvertedActivationPoint = [window.coordinateSpace convertPoint:activationPoint fromCoordinateSpace:view.coordinateSpace];
	
	CGFloat calcX = !isnan(normalizedPoint.x) ? CGRectGetMinX(safeBoundsInScreenSpace) + CGRectGetWidth(safeBoundsInScreenSpace) * normalizedPoint.x : windowConvertedActivationPoint.x;
	
	CGFloat calcY = !isnan(normalizedPoint.y) ? CGRectGetMinY(safeBoundsInScreenSpace) + CGRectGetHeight(safeBoundsInScreenSpace) * normalizedPoint.y : windowConvertedActivationPoint.y;
	
	return CGPointMake(calcX, calcY);
}

static void _DTXApplySwipe(UIWindow* window, CGPoint startPoint, CGPoint endPoint, CGFloat velocity)
{
	NSCAssert(CGPointEqualToPoint(startPoint, endPoint) == NO, @"Start and end points for swipe cannot be equal");
	
	NSMutableArray<NSValue*>* points = [NSMutableArray new];
	
	for (CGFloat p = 0.0; p <= 1.0; p += 1.0 / (20.0 * velocity))
	{
		CGFloat x = LNLinearInterpolate(startPoint.x, endPoint.x, p);
		CGFloat y = LNLinearInterpolate(startPoint.y, endPoint.y, p);
		
		[points addObject:@(CGPointMake(x, y))];
	}
	
	[DTXSyntheticEvents touchAlongPath:points relativeToWindow:window holdDurationOnFirstTouch:0.0 holdDurationOnLastTouch:0.0];
}

- (void)dtx_swipeWithNormalizedOffset:(CGPoint)normalizedOffset velocity:(CGFloat)velocity
{
	[self dtx_swipeWithNormalizedOffset:normalizedOffset velocity:velocity normalizedStartingPoint:CGPointMake(NAN, NAN)];
}

#define DTX_CALC_SWIPE_START_END_POINTS(safeBoundsInScreenSpace, screenBounds, normalizedStartingPoint, normalizedOffset, main, other, CGRectGetMinMain, CGRectGetMinOther, CGRectGetMidMain, CGRectGetMidOther, CGRectGetMaxMain, CGRectGetMainSize, CGRectGetOtherSize) \
CGFloat mainStart = !isnan(normalizedStartingPoint.main) ? CGRectGetMinMain(safeBoundsInScreenSpace) + CGRectGetMainSize(safeBoundsInScreenSpace) * normalizedStartingPoint.main : MAX(MIN(CGRectGetMidMain(screenBounds) - 0.5 * normalizedOffset.main * CGRectGetMainSize(screenBounds), CGRectGetMaxMain(safeBoundsInScreenSpace) - 1), CGRectGetMinMain(safeBoundsInScreenSpace) + 1); \
startPoint.main = mainStart; \
startPoint.other = !isnan(normalizedStartingPoint.other) ? CGRectGetMinOther(safeBoundsInScreenSpace) + CGRectGetOtherSize(safeBoundsInScreenSpace) * normalizedStartingPoint.other : CGRectGetMidOther(safeBoundsInScreenSpace); \
endPoint.main = MIN(MAX(mainStart + normalizedOffset.main * CGRectGetMainSize(screenBounds), CGRectGetMinMain(screenBounds) + 1), CGRectGetMaxMain(screenBounds) - 1); \
