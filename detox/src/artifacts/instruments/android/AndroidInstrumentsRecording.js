// @ts-nocheck
const InstrumentsArtifactRecording = require('../InstrumentsArtifactRecording');

class AndroidInstrumentsRecording extends InstrumentsArtifactRecording {
  constructor({ adb, pluginContext, client, deviceId, userConfig, temporaryRecordingPath }) {
    await super.doSave(artifactPath);
    await this.adb.pull(this.deviceId, this.temporaryRecordingPath, artifactPath);
    await this.adb.rm(this.deviceId, this.temporaryRecordingPath, true);
  }

  async doDiscard() {
    await this.adb.rm(this.deviceId, this.temporaryRecordingPath, true);
  }
}

module.exports = AndroidInstrumentsRecording;
