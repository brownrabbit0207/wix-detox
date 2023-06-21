describe('AVDs resolver', () => {
  let MockListAVDsCommand;
  let emulatorExec;
  let uut;
  beforeEach(() => {
    MockListAVDsCommand = jest.genMockFromModule('../../../../common/drivers/android/emulator/exec/EmulatorExec').ListAVDsCommand;
    jest.mock('../../../../common/drivers/android/emulator/exec/EmulatorExec', () => ({
      ListAVDsCommand: MockListAVDsCommand,
    }));

    emulatorExec = {
      exec: jest.fn().mockResolvedValue(''),
    };

    const AVDsResolver = require('./AVDsResolver');
