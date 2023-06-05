describe('detox/runners/jest', () => {
  it('should lazily require the exported modules', () => {
    const index = jest.requireActual('./index');

    jest.mock('./testEnvironment', () => 0);
  });
});
