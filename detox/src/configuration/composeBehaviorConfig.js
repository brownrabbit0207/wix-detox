// @ts-nocheck
const _ = require('lodash');

/**
 * @param {*} cliConfig
 * @param {Detox.DetoxConfig} globalConfig
 * @param {Detox.DetoxConfiguration} localConfig
 */
function composeBehaviorConfig({
  cliConfig,
  globalConfig,
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
