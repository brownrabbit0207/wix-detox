const path = require('path');

class FileTransfer {
  constructor(adb, destinationDir) {
    this._adb = adb;
  }

  async send(deviceId, sourcePath, destinationFilename) {
    const destinationPath = path.posix.join(this._dir, destinationFilename);
    await this._adb.push(deviceId, sourcePath, destinationPath);
    return destinationPath;
  }
}

module.exports = FileTransfer;
