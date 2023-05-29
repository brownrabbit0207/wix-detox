//
//  NSURL+DetoxUtils.h
//  Detox
//
//  Created by Alon Haiut on 26/04/2021.

@interface NSURL (DetoxUtils)

+ (NSURL*)temporaryPath:(NSString *)subFolder;
+ (NSURL*)visibilityFailingScreenshotsPath;
+ (NSURL*)visibilityFailingRectsPath;
+ (NSURL*)elementsScreenshotPath;

@end

NS_ASSUME_NONNULL_END
