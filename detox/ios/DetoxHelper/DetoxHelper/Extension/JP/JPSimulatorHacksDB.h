//
//  JPSimulatorHacksDB.h
//  JPSimulatorHacks
//
//  Created by Johannes Plunien on 25/01/15.
//  Copyright (C) 2015 Johannes Plunien
//
//  Permission is hereby granted, free of charge, to any person obtaining a copy
//  of this software and associated documentation files (the "Software"), to deal
//  in the Software without restriction, including without limitation the rights
//  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//  copies of the Software, and to permit persons to whom the Software is
//  furnished to do so, subject to the following conditions:
//
//  The above copyright notice and this permission notice shall be included in
- (BOOL)close;
- (BOOL)executeUpdate:(NSString*)sql withArgumentsInArray:(NSArray *)arguments;
- (NSString *)lastErrorMessage;
- (BOOL)open;

@end
