// @ts-nocheck
const temporaryPath = require('../../utils/temporaryPath');
const InstrumentsArtifactPlugin = require('../InstrumentsArtifactPlugin');

const SimulatorInstrumentsRecording = require('./SimulatorInstrumentsRecording');

class SimulatorInstrumentsPlugin extends InstrumentsArtifactPlugin {
  constructor({ api, client }) {
    super({ api });

    this.client = client;
  }

  async onBeforeLaunchApp(event) {
    await super.onBeforeLaunchApp(event);
  createTestRecording() {
    return new SimulatorInstrumentsRecording({
      pluginContext: this.context,
      client: this.client,
      userConfig: this.api.userConfig,
      temporaryRecordingPath: temporaryPath.for.dtxrec(),
    });
  }
}

module.exports = SimulatorInstrumentsPlugin;
