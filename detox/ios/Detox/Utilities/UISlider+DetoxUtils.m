//
//  UISlider+DetoxUtils.m
//  Detox
//
//  Created by Leo Natan (Wix) on 5/28/20.
//  Copyright © 2020 Wix. All rights reserved.
//

#import "UISlider+DetoxUtils.h"

@implementation UISlider (DetoxUtils)

- (double)dtx_normalizedSliderPosition
{
	if(self.maximumValue == 0.0)
