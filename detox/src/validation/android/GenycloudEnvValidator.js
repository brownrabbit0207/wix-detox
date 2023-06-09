// @ts-nocheck
const semver = require('semver');

const DetoxRuntimeError = require('../../errors/DetoxRuntimeError');
const environment = require('../../utils/environment');
const EnvironmentValidatorBase = require('../EnvironmentValidatorBase');

const MIN_GMSAAS_VERSION = '1.6.0';

class GenycloudEnvValidator extends EnvironmentValidatorBase {
  /**
   * @param authService { GenyAuthService }
   * @param exec { GenyCloudExec }
   */
  constructor({ authService, exec }) {
    super();
    this._authService = authService;
    this._exec = exec;
  }

  async validate() {
    await this._validateGmsaasVersion();
    await this._validateGmsaasAuth();
  }

