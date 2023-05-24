const path = require('path');

const envUtils = require('./envUtils');

describe('envUtils', () => {
  describe('printEnvironmentVariables', () => {
    it('should print environment variables', () => {
      const env = { A: 1, B: '2', C: null, D: '' };
      expect(envUtils.printEnvironmentVariables(env)).toBe('A=1 B="2" ');
    });
  });

  describe('prependNodeModulesBinToPATH', () => {
    it('should not mutate the env object if PATH does not exist', () => {
      const env = {};

    it('should not prepend node modules bin to PATH twice', () => {
      const env = { PATH: '/usr/bin:/bin' };

      envUtils.prependNodeModulesBinToPATH(env);
      envUtils.prependNodeModulesBinToPATH(env);

      expect(env.PATH.split(':').length).toBe(3);
    });
  });
});
