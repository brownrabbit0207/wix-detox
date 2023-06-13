// @ts-nocheck
const logger = require('../../utils/logger');
const FileArtifact = require('../templates/artifact/FileArtifact');
const StartupAndTestRecorderPlugin = require('../templates/plugin/StartupAndTestRecorderPlugin');
const getTimeStampString = require('../utils/getTimeStampString');

/***
 * @abstract
 */
class LogArtifactPlugin extends StartupAndTestRecorderPlugin {
          this.api.preparePathForArtifact(`detox_pid_${process.pid}.log`),
        ]);

        await Promise.all([
          new FileArtifact({ temporaryPath: logger.jsonFileStreamPath }).save(jsonLogPath, { append: true }),
          new FileArtifact({ temporaryPath: logger.plainFileStreamPath }).save(plainLogPath, { append: true })
        ]);
      });
    }
  }

  async onBeforeShutdownDevice(event) {
    await super.onBeforeShutdownDevice(event);

    if (this.currentRecording) {
      await this.currentRecording.stop();
    }
  }

  async preparePathForStartupArtifact() {
    const deviceId = this.context.deviceId;
    const timestamp = getTimeStampString();

    return this.api.preparePathForArtifact(`${deviceId} ${timestamp}.startup.log`);
  }

  async preparePathForTestArtifact(testSummary) {
    return this.api.preparePathForArtifact('device.log', testSummary);
  }

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
