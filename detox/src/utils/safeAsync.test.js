const safeAsync = require('./safeAsync');

describe('safeAsync', () => {
  it(`should wrap value into a promise`, async() => {
    await expect(safeAsync(5)).resolves.toEqual(5);
  });

  it(`should call sync function and return its result as a promise`, async() => {
    await expect(safeAsync(() => 5)).resolves.toEqual(5);
  });
