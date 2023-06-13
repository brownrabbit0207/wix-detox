const path = require('path');

class FileTransfer {
  constructor(adb, destinationDir) {
    this._adb = adb;
    this._dir = destinationDir;
  }

  async prepareDestinationDir(deviceId) {
    await this._adb.shell(deviceId, `rm -fr ${this._dir}`);
