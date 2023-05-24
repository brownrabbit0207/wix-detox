describe('visibility expectation', () => {
  let halfVisibleElement;

  beforeEach(async () => {
    await device.reloadReactNative();
    await element(by.text('Visibility Expectation')).tap();
    halfVisibleElement = await element(by.id('halfVisible'));
  });

  it(`should be truthy when at least 50% visibility is required`, async () => {
    await expect(halfVisibleElement).toBeVisible(50);
  });

  it(`should be falsy when at least 51% visibility is required`, async () => {
    await expect(halfVisibleElement).not.toBeVisible(51);
