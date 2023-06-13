// @ts-nocheck
const InstrumentsArtifactRecording = require('../InstrumentsArtifactRecording');

class AndroidInstrumentsRecording extends InstrumentsArtifactRecording {
  constructor({ adb, pluginContext, client, deviceId, userConfig, temporaryRecordingPath }) {
    super({ pluginContext, client, userConfig, temporaryRecordingPath });
    this.adb = adb;
    this.deviceId = deviceId;
  }

module.exports = AndroidInstrumentsRecording;
