const {scrollViewDriver} = require('./drivers/fs-scroll-driver');
const {expectToThrow} = require('./utils/custom-expects');

/**
 * A mini suite providing an alternative to tests failing due to issues found in RN 58+ on Android (see
    await device.reloadReactNative();
    await element(by.text('FS Scroll Actions')).tap();
  });

  it('should scroll for a small amount in direction', async () => {
    await expect(scrollViewDriver.element()).toBeVisible();
    await expect(scrollViewDriver.firstItem()).toBeVisible();
    await expect(scrollViewDriver.lastItem()).not.toBeVisible();

    await scrollViewDriver.scrollBy(60);
    await expect(scrollViewDriver.firstItem()).not.toBeVisible();
    await expect(scrollViewDriver.secondItem()).toBeVisible();

    await scrollViewDriver.scrollBy(-60);
    await expect(scrollViewDriver.firstItem()).toBeVisible();
    await expect(scrollViewDriver.lastItem()).not.toBeVisible();
  });

  it('should scroll for a large amount in direction', async () => {
    await expect(scrollViewDriver.element()).toBeVisible();
    await expect(scrollViewDriver.firstItem()).toBeVisible();
    await expect(scrollViewDriver.lastItem()).not.toBeVisible();

    await expectToThrow(() => scrollViewDriver.scrollBy(1000));

    await expect(scrollViewDriver.firstItem()).not.toBeVisible();
    await expect(scrollViewDriver.lastItem()).toBeVisible();
  });
});
