const Artifact = require('../templates/artifact/Artifact');

const ScreenshotArtifactPlugin = require('./ScreenshotArtifactPlugin');

class ADBScreencapPlugin extends ScreenshotArtifactPlugin {
  constructor(config) {
    super(config);

    this._adb = config.adb;
    this._devicePathBuilder = config.devicePathBuilder;
  }

  createTestArtifact() {
    const adb = this._adb;
    const deviceId = this.context.deviceId;
      },
    });
  }
}

module.exports = ADBScreencapPlugin;