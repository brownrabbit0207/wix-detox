describe('visibility expectation', () => {
  let halfVisibleElement;

  beforeEach(async () => {
    await device.reloadReactNative();
    await element(by.text('Visibility Expectation')).tap();
    halfVisibleElement = await element(by.id('halfVisible'));
  });

  it(`should be truthy when at least 50% visibility is required`, async () => {

    it(`should be truthy when at least 25% visibility is required`, async () => {
      await waitFor(halfVisibleElement).toBeVisible(25).withTimeout(2000);
    });

    it(`should be falsy when at least 26% visibility is required`, async () => {
      await waitFor(halfVisibleElement).not.toBeVisible(26).withTimeout(2000);
    });
  });
});
