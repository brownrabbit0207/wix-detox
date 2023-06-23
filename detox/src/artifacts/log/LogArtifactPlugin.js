// @ts-nocheck
const logger = require('../../utils/logger');
const FileArtifact = require('../templates/artifact/FileArtifact');
const StartupAndTestRecorderPlugin = require('../templates/plugin/StartupAndTestRecorderPlugin');
const getTimeStampString = require('../utils/getTimeStampString');

/***
 * @abstract
 */
class LogArtifactPlugin extends StartupAndTestRecorderPlugin {
  constructor({ api }) {
    super({ api });
  }

  async onBeforeCleanup() {
    await super.onBeforeCleanup();

    if (this.shouldKeepArtifactOfSession()) {
      this.api.requestIdleCallback(async () => {
        const [jsonLogPath, plainLogPath] = await Promise.all([
          this.api.preparePathForArtifact(`detox_pid_${process.pid}.json.log`),
          this.api.preparePathForArtifact(`detox_pid_${process.pid}.log`),
        ]);

        await Promise.all([
  /** @param {string} config */
  static parseConfig(config) {
    switch (config) {
      case 'failing':
        return {
          enabled: true,
          keepOnlyFailedTestsArtifacts: true,
        };
      case 'all':
        return {
          enabled: true,
          keepOnlyFailedTestsArtifacts: false,
        };
      case 'none':
      default:
        return {
          enabled: false,
          keepOnlyFailedTestsArtifacts: false,
        };
    }
  }
}

module.exports = LogArtifactPlugin;
