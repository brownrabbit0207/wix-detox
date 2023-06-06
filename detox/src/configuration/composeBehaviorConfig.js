// @ts-nocheck
const _ = require('lodash');

/**
 * @param {*} cliConfig
 * @param {Detox.DetoxConfig} globalConfig
 * @param {Detox.DetoxConfiguration} localConfig
 */
function composeBehaviorConfig({
  cliConfig,
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
