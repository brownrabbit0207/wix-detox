const AndroidDevicePathBuilder = require('../../artifacts/utils/AndroidDevicePathBuilder');
const DeviceRegistry = require('../../devices/DeviceRegistry');
const AAPT = require('../../devices/common/drivers/android/exec/AAPT');
const ADB = require('../../devices/common/drivers/android/exec/ADB');
const ApkValidator = require('../../devices/common/drivers/android/tools/ApkValidator');
const { TempFileTransfer } = require('../../devices/common/drivers/android/tools/TempFileTransfer');

const AndroidServiceLocator = {
  get emulator() {
    return require('./emulatorServiceLocator');
  },

  get genycloud() {
    return require('./genycloudServiceLocator');
  },
