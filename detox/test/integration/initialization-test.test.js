const execa = require('execa');

describe('Initialization (context) tests', () => {
  test.each([
    `cross-env DETOX_CONFIGURATION=stub node integration/utils/simplistic-runner.js`,
  ])('should run: %s', async (cmd) => {
    const handle = execa.commandSync(cmd, { stdio: 'inherit', shell: true });
    expect(handle.exitCode).toBe(0);
  });
});
