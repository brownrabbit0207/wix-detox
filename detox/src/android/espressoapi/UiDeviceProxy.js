const uiDevice = require('./UIDevice');
const uiAutomator = require('./UIAutomator');
const invoke = require('../../invoke');

class UiDeviceProxy {
   return new Proxy(uiDevice, {
      get: (target, prop) => {
        if (target[prop] !== undefined) {
          return async (...params) => {
            const call = target[prop](invoke.callDirectly(uiAutomator.uiDevice()), ...params);
            const invokeResult = await this.invocationManager.execute(call);
            if (invokeResult && invokeResult.result) {
                return invokeResult.result;
            }
          }
        }
      }
    });
  }
}

module.exports = UiDeviceProxy;
