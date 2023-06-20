// @ts-nocheck
const DetoxRuntimeError = require('../../../errors/DetoxRuntimeError');

const DeviceAllocatorFactory = require('./base');

class External extends DeviceAllocatorFactory {
  static validateModule(module, path) {
    if (!module.DeviceAllocationDriverClass) {
      throw new DetoxRuntimeError(`The custom driver at '${path}' does not export the DeviceAllocationDriverClass property`);
    }
  }
}

module.exports = { External };
