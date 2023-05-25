const deviceId = 'mock-device-id';
const deviceDestinationDir = '/mock-tmp-dir';

describe('File-transfer util', () => {
  let adb;
  let uut;

  beforeEach(() => {
    const ADBMock = jest.genMockFromModule('../exec/ADB');
    adb = new ADBMock();

    const FileTransfer = require('./FileTransfer');
    uut = new FileTransfer(adb, deviceDestinationDir);
  });

  it('should create the destination directory on the device', async () => {
    await uut.prepareDestinationDir(deviceId);

    expect(adb.shell).toHaveBeenCalledWith(deviceId, `rm -fr ${deviceDestinationDir}`);
    expect(adb.shell).toHaveBeenCalledWith(deviceId, `mkdir -p ${deviceDestinationDir}`);
