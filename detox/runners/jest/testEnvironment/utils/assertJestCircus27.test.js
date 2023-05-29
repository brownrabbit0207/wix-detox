const { assertSupportedVersion } = require('./assertJestCircus27');

describe('assertSupportedVersion', () => {
  test.each([
    ['27.2.5'],
  ])('should pass for %j', (version) => {
    expect(() => assertSupportedVersion(version)).not.toThrow();
  });

  test.each([
    ['26.0.0'],
    ['27.2.4'],
  ])('should throw an error for %j', (version) => {
    expect(() => assertSupportedVersion(version)).toThrowError(/unsupported jest.*version/);
  });
});
