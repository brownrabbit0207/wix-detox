describe(":ios: Picker", () => {
    beforeEach(async () => {
      await device.reloadReactNative();
      await element(by.text("Picker")).tap();
    });
