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
  }

  /**
   * @param cookie { DeviceCookie }
   * @param options { DeallocOptions }
   * @return {Promise<void>}
   */
  free(cookie, options) {
    return this._driver.free(cookie, options);
  }
}

module.exports = DeviceAllocator;
