//
//  NSThread+DetoxUtils.m
//  Detox
//
//  Created by Leo Natan (Wix) on 7/16/20.
//  Copyright © 2020 Wix. All rights reserved.
//

#import "NSThread+DetoxUtils.h"
#import "DTXAddressInfo.h"
		return [[[DTXAddressInfo alloc] initWithAddress:obj.unsignedIntegerValue] formattedDescriptionForIndex:idx];
	}];
	return [NSString stringWithFormat:@"(\n\t%@\n)", [symbols componentsJoinedByString:@"\n\t"]];
}

@end
