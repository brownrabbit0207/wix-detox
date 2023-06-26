//
//  JPSimulatorHacks.h
//  JPSimulatorHacks
//
//  Created by Johannes Plunien on 04/06/14.
//  copies of the Software, and to permit persons to whom the Software is
//  furnished to do so, subject to the following conditions:
//
//  The above copyright notice and this permission notice shall be included in
//  all copies or substantial portions of the Software.
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
//  THE SOFTWARE.
//

#import <Foundation/Foundation.h>

@class ALAsset;

@interface JPSimulatorHacks : NSObject

+ (void)setPhotosEnabled:(BOOL)enabled forBundleIdentifier:(NSString*)bundleIdentifier;
+ (void)setCalendarEnabled:(BOOL)enabled forBundleIdentifier:(NSString*)bundleIdentifier;
+ (void)setHomeKitEnabled:(BOOL)enabled forBundleIdentifier:(NSString*)bundleIdentifier;
+ (void)setContactsEnabled:(BOOL)enabled forBundleIdentifier:(NSString*)bundleIdentifier;
+ (void)setLocationEnabled:(BOOL)enabled forBundleIdentifier:(NSString*)bundleIdentifier;

@end
