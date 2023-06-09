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
    await this._stopRecordingIfExists();
  }

  async _stopRecordingIfExists() {
    if (this.testRecording) {
    }
  }
}

module.exports = InstrumentsArtifactPlugin;
