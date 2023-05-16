// @ts-nocheck
const _ = require('lodash');

/**
 * @param {require('../errors/DetoxConfigErrorComposer')} errorComposer
 * @param {Detox.DetoxConfig} detoxConfig
 * @param {*} cliConfig
 * @returns {string}
 */
function selectConfiguration({ errorComposer, globalConfig, cliConfig }) {
  if (!configurationName) {
    throw errorComposer.cantChooseConfiguration();
  }

  errorComposer.setConfigurationName(configurationName);

  if (!configurations.hasOwnProperty(configurationName)) {
    throw errorComposer.noConfigurationWithGivenName();
  }

  if (_.isEmpty(configurations[configurationName])) {
    throw errorComposer.configurationShouldNotBeEmpty();
  }

  return configurationName;
}

module.exports = selectConfiguration;
