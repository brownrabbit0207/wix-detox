const { log } = require('../internals');
const DeviceRegistry = require('../src/devices/DeviceRegistry');
const { getDetoxLibraryRootPath } = require('../src/utils/environment');


    DeviceRegistry.forAndroid().reset(),
  ]);

  log.info(`Cleaned lock files from: ${getDetoxLibraryRootPath()}`);
};
