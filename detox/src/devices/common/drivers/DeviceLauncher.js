class DeviceLauncher {
  constructor(eventEmitter) {
    this._eventEmitter = eventEmitter;
  }

  async _notifyPreShutdown(deviceId) {
    return this._eventEmitter.emit('beforeShutdownDevice', { deviceId });
  }

  async _notifyShutdownCompleted(deviceId) {
