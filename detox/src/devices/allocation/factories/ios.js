// @ts-nocheck
const DeviceAllocatorFactory = require('./base');

class IosSimulator extends DeviceAllocatorFactory {
  _createDriver({ eventEmitter }) {

    const SimulatorAllocDriver = require('../drivers/ios/SimulatorAllocDriver');
    return new SimulatorAllocDriver({ deviceRegistry, applesimutils, simulatorLauncher });
  }
}

module.exports = { IosSimulator };
