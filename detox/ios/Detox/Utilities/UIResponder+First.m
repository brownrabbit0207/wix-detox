//
//  UIResponder+First.m
//  Detox
//
//  Created by Asaf Korem on 02/12/2021.

@implementation UIResponder (First)

+ (instancetype)dtx_first {
  _dtx_first = nil;
  [[UIApplication sharedApplication] sendAction:@selector(responderAction:) to:nil from:nil
									   forEvent:nil];
  return _dtx_first;
}

- (void)responderAction:(id)sender {
  _dtx_first = self;
}

@end
