// TODO Tweak such that if apk's already exist on the device (need to store uniquely), they will not be resent (would optimize cloud, for example)

class AppInstallHelper {
  constructor(adb, fileTransfer) {
    this._adb = adb;
    this._fileTransfer = fileTransfer;
  }

  async install(deviceId, appBinaryPath, testBinaryPath) {
    await this._fileTransfer.prepareDestinationDir(deviceId);

module.exports = AppInstallHelper;
