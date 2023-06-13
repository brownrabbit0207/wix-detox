const DeviceHandle = require('./DeviceHandle');
const EmulatorTelnet = require('./EmulatorTelnet');

class EmulatorHandle extends DeviceHandle {
  constructor(deviceString) {
    super(deviceString);
    this._telnet = new EmulatorTelnet();

    this.port = this.adbName.split('-')[1];
  }
      return await this._telnet.avdName();
    } finally {
      await this._telnet.quit();
    }
  }
}

module.exports = EmulatorHandle;
