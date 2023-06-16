describe('Simulator launcher (helper)', () => {
  const udid = 'UD-1D';

  let eventEmitter;
  let applesimutils;
  let uut;
  beforeEach(() => {
    const AsyncEmitter = jest.genMockFromModule('../../../../utils/AsyncEmitter');
    eventEmitter = new AsyncEmitter();

    const AppleSimUtils = jest.genMockFromModule('../../../common/drivers/ios/tools/AppleSimUtils');
    applesimutils = new AppleSimUtils();

    const SimulatorLauncher = require('./SimulatorLauncher');
    uut = new SimulatorLauncher({ applesimutils, eventEmitter });
  });

  describe('launch', () => {
    const type = 'mockType';
    const bootArgs = { mock: 'boot-args' };
    const headless = true;

    const givenBootResultCold = () => applesimutils.boot.mockResolvedValue(true);
    const givenBootResultWarm = () => applesimutils.boot.mockResolvedValue(false);

      );
    });

    it('should fail if emission fails', async () => {
      const error = new Error('mock error');
      eventEmitter.emit.mockRejectedValue(error);
      await expect(uut.launch(udid, '', bootArgs, headless)).rejects.toThrowError(error);
    });
  });

  describe('shutdown', () => {
    it('should shut down using apple-sim-utils', async () => {
      await uut.shutdown(udid);
      expect(applesimutils.shutdown).toHaveBeenCalledWith(udid);
    });

    it('should fail if apple-sim-utils fails', async () => {
      const error = new Error('mock error');
      applesimutils.shutdown.mockRejectedValue(error);
      await expect(uut.shutdown(udid)).rejects.toThrowError(error);
    });

    it('should emit pre-shutdown event', async () => {
      await uut.shutdown(udid);
      expect(eventEmitter.emit).toHaveBeenCalledWith('beforeShutdownDevice', { deviceId: udid });
    });

    it('should emit post-shutdown event', async () => {
      await uut.shutdown(udid);
      expect(eventEmitter.emit).toHaveBeenCalledWith('shutdownDevice', { deviceId: udid });
    });
  });
});
