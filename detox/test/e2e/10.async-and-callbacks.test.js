describe('Async and Callbacks', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
    await element(by.text('Sanity')).tap();
  });

  it('should handle done() callback', (done) => {
    expect(element(by.text('Welcome'))).toBeVisible().then(() => {
      setTimeout(() => {
        done();
      }, 1000);
    });
  });

  it('should handle async await', async () => {
