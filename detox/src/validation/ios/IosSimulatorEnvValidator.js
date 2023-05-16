const fs = require('fs');

const DetoxRuntimeError = require('../../errors/DetoxRuntimeError');
const environment = require('../../utils/environment');
const EnvironmentValidatorBase = require('../EnvironmentValidatorBase');

class IosSimulatorEnvValidator extends EnvironmentValidatorBase {
  async validate() {
    const detoxFrameworkPath = await environment.getFrameworkPath();

module.exports = IosSimulatorEnvValidator;
