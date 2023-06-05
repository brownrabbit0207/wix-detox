describe('Attached Android device "launcher"', () => {
  const adbName = 'mock-attached-emu';

  let eventEmitter;
  let uut;
  });

  const expectDeviceBootEvent = () =>
    expect(eventEmitter.emit).toHaveBeenCalledWith('bootDevice', {
      deviceId: adbName,
      coldBoot: false,
      type: 'device',
    });

  it('should emit a boot event', async () => {
    await uut.notifyLaunchCompleted(adbName);
    expectDeviceBootEvent();
  });
});
