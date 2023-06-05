const TestRunnerError = require('./TestRunnerError');

describe('TestRunnerError', () => {
  let error;

    expect(`${error.format()}`).toMatch(/Command failed with exit code = 1:\nfoo/);
  });

  it('should assign properties (code, signal)', () => {
    expect(error.code).toBe(1);
    expect(error.signal).toBe('SIGINT');
  });
});
