// @ts-nocheck
const _ = require('lodash');

/**
 * @param {require('../errors/DetoxConfigErrorComposer')} errorComposer
 * @param {Detox.DetoxConfig} detoxConfig
 * @param {*} cliConfig
 * @returns {string}
 */
function selectConfiguration({ errorComposer, globalConfig, cliConfig }) {
  const { configurations } = globalConfig;

  if (_.isEmpty(configurations)) {
    throw errorComposer.noConfigurationsInside();
  }

  let configurationName = cliConfig.configuration || globalConfig.selectedConfiguration;
  if (!configurationName && _.size(configurations) === 1) {
    configurationName = _.keys(configurations)[0];
  }
