// @ts-nocheck
const DeviceAllocatorFactory = require('./base');

class IosSimulator extends DeviceAllocatorFactory {
  _createDriver({ eventEmitter }) {
    const serviceLocator = require('../../../servicelocator/ios');
    const applesimutils = serviceLocator.appleSimUtils;
    const deviceRegistry = serviceLocator.deviceRegistry;

    const SimulatorLauncher = require('../drivers/ios/SimulatorLauncher');
