#import "CalendarManager.h"
#import <EventKit/EventKit.h>

@implementation CalendarManager
RCT_EXPORT_MODULE();
	{
        permission = @"granted";
	}
    else
	{
        permission = @"denied";
	}

    resolve(permission);
}

@end
