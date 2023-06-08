// @ts-nocheck
describe('iOS simulator test environment validator', () => {

  const DETOX_FRAMEWORK_PATH = '/path/to/framework';

  const givenFrameworkPathExists = () => jest.spyOn(uut, '_frameworkPathExists').mockReturnValue(true);
  const givenFrameworkPathNotExists = () => jest.spyOn(uut, '_frameworkPathExists').mockReturnValue(false);

  let environment;
  let uut;
  beforeEach(() => {
    jest.mock('../../utils/environment');
    environment = require('../../utils/environment');
    environment.getFrameworkPath.mockResolvedValue(DETOX_FRAMEWORK_PATH);

    const IosSimulatorEnvValidator = require('./IosSimulatorEnvValidator');
    uut = new IosSimulatorEnvValidator();
  });

  describe('given detox framework path doesn\'t exist', () => {
