const { scrollViewDriver } = require('./drivers/fs-scroll-driver');
const { expectToThrow } = require('./utils/custom-expects');

/**
 * Another mini-suite providing an alternative to https://github.com/facebook/react-native/issues/23870.
 * See actions visibility workaround for more.
 */
describe(':android: Visibility-bug workaround for waitfor() api', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
    await element(by.text('FS Scroll Actions')).tap();
  });

  it('should find element by scrolling until it is visible', async () => {
    await expect(scrollViewDriver.lastItem()).not.toBeVisible();
    await waitFor(scrollViewDriver.lastItem()).toBeVisible().whileElement(scrollViewDriver.byId()).scroll(200, 'down');
    await expect(scrollViewDriver.lastItem()).toBeVisible();
  });

  it('should abort scrolling if element was not found', async () => {
  it('should be able to discern elements by index', async () => {
    await waitFor(element(by.text('Index')).atIndex(1))
      .toBeVisible()
      .whileElement(by.id('ScrollView161'))
      .scroll(50, 'down');
  });
});
