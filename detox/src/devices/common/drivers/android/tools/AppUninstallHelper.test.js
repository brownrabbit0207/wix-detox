const deviceId = 'mock-device-id';
const bundleId = 'mock-bundle-id';
const testBundleId = 'mock-bundle-id.test';

describe('Android app uninstall helper', () => {
  let adb;
  beforeEach(() => {
    const ADBClass = jest.genMockFromModule('../exec/ADB');
    adb = new ADBClass();
    adb.isPackageInstalled.mockResolvedValue(true);
  });

  let uut;
  beforeEach(() => {
    const AppUninstallHelper = require('./AppUninstallHelper');
    uut = new AppUninstallHelper(adb);
  });

  it('should uninstall the app\'s binary using adb', async () => {
    await uut.uninstall(deviceId, bundleId);
    expect(adb.uninstall).toHaveBeenCalledWith(deviceId, bundleId);
  });

  it('should fail if app uninstall fails', async () => {
    adb.uninstall.mockRejectedValue(new Error('mocked error in adb.uninstall'));
    adb.isPackageInstalled
      .mockResolvedValueOnce(true)
      .mockResolvedValueOnce(false);

    await uut.uninstall(deviceId, bundleId);

    expect(adb.isPackageInstalled).toHaveBeenCalledWith(deviceId, testBundleId);
    expect(adb.uninstall).not.toHaveBeenCalledWith(deviceId, testBundleId);
  });
});
