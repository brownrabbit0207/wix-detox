describe('Stub2', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
    await element(by.text('Sanity')).tap();
  });

  it('should show hello screen after tap', async () => {
    await element(by.text('Say Hello')).tap();
    await expect(element(by.text('Hello!!!'))).toBeVisible();
  });
});
