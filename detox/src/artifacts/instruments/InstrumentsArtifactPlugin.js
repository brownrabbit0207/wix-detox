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

    if (this.testRecording) {
      await this.testRecording.start({ dry: true }); // start nominally, to set a correct recording state
    }
  }

  /** @param {string} config */
  static parseConfig(config) {
    switch (config) {
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

module.exports = InstrumentsArtifactPlugin;
