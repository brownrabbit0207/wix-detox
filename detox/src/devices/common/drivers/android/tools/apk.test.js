const path = require('path'); // Using path methods will normalize slashes to backslashes on win32, so tests must match.
const rootPath = process.platform === 'win32' ? 'C:\\Users\\SomeUser' : '~/somePath';

describe('APK utils', () => {

  let apkUtils;
  beforeEach(() => {
    apkUtils = require('./apk');
  });

    });

    it('should properly resolve given a gradle build with multiple flavors', async () => {
      const inputApkPath = path.join(rootPath, 'build/outputs/apk/pocPlayStore/debug/app-poc-playStore-debug.apk');
      const expectedTestApkPath = path.join(rootPath, 'build/outputs/apk/androidTest/pocPlayStore/debug/app-poc-playStore-debug-androidTest.apk');
      expect(apkUtils.getTestApkPath(inputApkPath)).toEqual(expectedTestApkPath);
    });
  });
});
