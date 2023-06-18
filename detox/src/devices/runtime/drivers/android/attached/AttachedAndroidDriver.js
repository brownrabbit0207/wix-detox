
class AttachedAndroidDriver extends AndroidDriver {
  getDeviceName() {
    return `AttachedDevice:${this.adbName}`;
  }
}

module.exports = AttachedAndroidDriver;
