// @ts-nocheck
const errors = require('../errors');

const wrapWithStackTraceCutter = require('./wrapWithStackTraceCutter');

describe('wrapWithStackTraceCutter', () => {
  it.each([
    ['DetoxError'],
    ['DetoxConfigError'],
    ['DetoxInternalError'],
    ['DetoxRuntimeError'],
  ])('should post-process known errors (e.g., %s)', async (errName) => {
    const ErrorClass = errors[errName];
    const obj = createThrowingObject(ErrorClass);

    /** @type {Error} */
    const anError = await obj.willThrow().catch(e => e);
    expect(anError).toBeInstanceOf(ErrorClass);
    expect(anError.stack).toMatch(/test error/);
    expect(anError.stack).toMatch(/^\s*at \S+ \(\S+\)$/m);
  function createThrowingObject(ErrorClass) {
    const originalError = new ErrorClass('test error');
    const willThrow = () => { throw originalError; };
    const returns42 = () => 42;
    const result = { originalErrorStack: originalError.stack, willThrow, returns42 };
    wrapWithStackTraceCutter(result, ['willThrow', 'returns42']);

    return result;
  }
});
