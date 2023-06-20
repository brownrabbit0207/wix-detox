describe(':ios: Custom Keyboard', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
    await element(by.text('Custom Keyboard')).tap();
  });
  
  afterEach(async () => {
    await element(by.id('closeButton')).tap();
  });

});
