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

  const mockAdbDevices = (devices) => mockAdb.devices.mockResolvedValue({ devices });
});
