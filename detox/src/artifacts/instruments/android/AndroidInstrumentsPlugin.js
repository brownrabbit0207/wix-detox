// @ts-nocheck
const InstrumentsArtifactPlugin = require('../InstrumentsArtifactPlugin');

const AndroidInstrumentsRecording = require('./AndroidInstrumentsRecording');

class AndroidInstrumentsPlugin extends InstrumentsArtifactPlugin {
  constructor({ api, adb, client, devicePathBuilder }) {
    super({ api });

    this.adb = adb;
    this.client = client;
    this.devicePathBuilder = devicePathBuilder;
  }

  async onBeforeLaunchApp(event) {
      adb: this.adb,
      pluginContext: this.context,
      client: this.client,
      deviceId: this.context.deviceId,
      userConfig: this.api.userConfig,
      temporaryRecordingPath: this.devicePathBuilder.buildTemporaryArtifactPath('.dtxplain'),
    });
  }
}

module.exports = AndroidInstrumentsPlugin;
