// @ts-nocheck
const _ = require('lodash');

/**
 * @param {*} cliConfig
  localConfig,
}) {
  return _.chain({})
    .defaultsDeep(
      {
        init: {
          keepLockFile: cliConfig.keepLockFile ? true : undefined,
          reinstallApp: cliConfig.reuse ? false : undefined,
        },
        cleanup: {
          shutdownDevice: cliConfig.cleanup ? true : undefined,
        },
      },
      localConfig.behavior,
      globalConfig.behavior,
      {
        init: {
          exposeGlobals: true,
          keepLockFile: false,
          reinstallApp: undefined,
        },
        launchApp: 'auto',
        cleanup: {
          shutdownDevice: false,
        },
      }
    )
    .tap(config => {
      if (config.init.reinstallApp === undefined) {
        config.init.reinstallApp = config.launchApp !== 'manual';
      }
    })
    .value();
}

module.exports = composeBehaviorConfig;
