describe('Sanity', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
    await detox.traceCall('Navigate to sanity', element(by.text('Sanity')).tap());
  });

  it('should show hello screen after tap', async () => {
    await element(by.text('Say Hello')).tap();
    await expect(element(by.text('Hello!!!'))).toBeVisible();
  });

  it('should show world screen after tap', async () => {
    await element(by.text('Say World')).tap();
    await expect(element(by.text('World!!!'))).toBeVisible();
  });
});
