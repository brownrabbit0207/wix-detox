// @ts-nocheck
const temporaryPath = require('../../utils/temporaryPath');
const LogArtifactPlugin = require('../LogArtifactPlugin');

const SimulatorLogRecording = require('./SimulatorLogRecording');

class SimulatorLogPlugin extends LogArtifactPlugin {
  constructor(config) {
    super(config);

    this.appleSimUtils = config.appleSimUtils;
    this.priority = 8;
  }

  async onBeforeLaunchApp(event) {
    return new SimulatorLogRecording({
      udid: this.context.deviceId,
      bundleId: this.context.bundleId,
      appleSimUtils: this.appleSimUtils,
      temporaryLogPath: temporaryPath.for.log(),
      config: {
        delayAfterStart: 50,
        delayBeforeStop: 50,
        delayBeforeSigterm: 200,
      },
    });
  }
}

module.exports = SimulatorLogPlugin;
