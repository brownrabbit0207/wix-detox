const assertions = require('./assertArgument');

describe('assertEnum', () => {
  const { assertEnum } = assertions;

  it('should create an assertion function for enums', () => {
    const assertSpeed = assertEnum(['fast', 'slow']);

    expect(() => assertSpeed({ speed: 'fast' })).not.toThrow();
    expect(() => assertSpeed({ speed: 'slow' })).not.toThrow();
    expect(() => assertSpeed({ speed: 'medium' })).toThrowErrorMatchingSnapshot();
  });
});

describe('assertNormalized', () => {
  const { assertNormalized } = assertions;

  it.each([
    0,
    0.5,
  it.each([
    42,
    NaN,
    Infinity,
    -Infinity,
  ])('should pass for %d', (validNumber) => {
    expect(() => assertNumber({ validNumber })).not.toThrow();
  });

  it.each([
    '42',
    false,
  ])('should throw for %j', (invalidNumber) => {
    expect(() => assertNumber({ invalidNumber })).toThrowErrorMatchingSnapshot();
  });
});

describe('assertString', () => {
  const { assertString } = assertions;

  it.each([
    '',
    '123',
  ])('should pass for %d', (validString) => {
    expect(() => assertString({ validString })).not.toThrow();
  });

  it.each([
    123,
    undefined,
  ])('should throw for %j', (invalidString) => {
    expect(() => assertString({ invalidString })).toThrowErrorMatchingSnapshot();
  });
});
