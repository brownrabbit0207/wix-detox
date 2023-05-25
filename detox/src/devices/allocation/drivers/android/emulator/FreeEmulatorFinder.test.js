const { emulator5556, localhost5555, mockAvdName } = require('../../../../common/drivers/android/tools/__mocks__/handles');

describe('FreeEmulatorFinder', () => {
  const mockAdb = { devices: jest.fn() };

  let mockDeviceRegistry;
  let uut;
  beforeEach(() => {
    const DeviceRegistry = jest.genMockFromModule('../../../../DeviceRegistry');
    mockDeviceRegistry = new DeviceRegistry();
    mockDeviceRegistry.includes.mockReturnValue(false);

    const FreeEmulatorFinder = require('./FreeEmulatorFinder');
    uut = new FreeEmulatorFinder(mockAdb, mockDeviceRegistry);
  });

  it('should return device when it is an emulator and avdName matches', async () => {
    mockAdbDevices([emulator5556]);
    const result = await uut.findFreeDevice(mockAvdName);
    expect(result).toBe(emulator5556.adbName);
