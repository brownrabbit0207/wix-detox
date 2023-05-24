describe('Device-handle', () => {

  let DeviceHandle;
  beforeEach(() => {
    DeviceHandle = require('./DeviceHandle');
  });

  const deviceHandle = (adbName, status) => new DeviceHandle(`${adbName}\t${status}`);

  it('should extract the device\'s adb name', () => {
    const uut = deviceHandle('mockdevice', 'online');
    expect(uut.adbName).toEqual('mockdevice');
  });

  it('should extract the device status', () => {
});
