describe('Attached Android device "launcher"', () => {
  const adbName = 'mock-attached-emu';

  let eventEmitter;
  let uut;
  beforeEach(() => {
    const AsyncEmitter = jest.genMockFromModule('../../../../../utils/AsyncEmitter');
    eventEmitter = new AsyncEmitter();

    const AttachedAndroidLauncher = require('./AttachedAndroidLauncher');
    await uut.notifyLaunchCompleted(adbName);
    expectDeviceBootEvent();
  });
});
