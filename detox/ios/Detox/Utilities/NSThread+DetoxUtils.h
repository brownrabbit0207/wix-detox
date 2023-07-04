//
//  NSThread+DetoxUtils.h
//  Detox
//
//  Created by Leo Natan (Wix) on 7/16/20.

@interface NSThread (DetoxUtils)

@property (nonatomic, class, readonly, copy) NSString* dtx_demangledCallStackSymbols NS_SWIFT_NAME(demangledCallStackSymbols);

+ (NSString*)dtx_demangledCallStackSymbolsForReturnAddresses:(NSArray<NSNumber*>*)returnAddresses startIndex:(NSInteger)startIndex NS_SWIFT_NAME(demangledCallStackSymbols(forReturnAddresses:startIndex:));

@end

NS_ASSUME_NONNULL_END
