// @ts-nocheck
const log = require('../../utils/logger').child({ cat: 'device' });
const traceMethods = require('../../utils/traceMethods');

class DeviceAllocator {
  /**
   * @param allocationDriver { AllocationDriverBase }
   */
  constructor(allocationDriver) {
    this._driver = allocationDriver;
    traceMethods(log, this, ['allocate', 'postAllocate', 'free']);
  }

  /**
   * @param deviceConfig { Object }
   * @return {Promise<DeviceCookie>}
   */
  allocate(deviceConfig) {
    return this._driver.allocate(deviceConfig);
  }

  /**
   * @param {DeviceCookie} deviceCookie
   * @return {Promise<unknown>}
   */
