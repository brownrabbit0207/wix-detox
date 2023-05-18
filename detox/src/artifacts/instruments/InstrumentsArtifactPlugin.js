// @ts-nocheck
const WholeTestRecorderPlugin = require('../templates/plugin/WholeTestRecorderPlugin');

class InstrumentsArtifactPlugin extends WholeTestRecorderPlugin {
  constructor({ api }) {
    super({ api });
  }

  async onBeforeUninstallApp(event) {
    await super.onBeforeUninstallApp(event);
    await this._stopRecordingIfExists();
  }

  async onBeforeTerminateApp(event) {
    await super.onBeforeTerminateApp(event);
    await this._stopRecordingIfExists();
  }

  async onBeforeShutdownDevice(event) {
    await super.onBeforeShutdownDevice(event);
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

module.exports = InstrumentsArtifactPlugin;
