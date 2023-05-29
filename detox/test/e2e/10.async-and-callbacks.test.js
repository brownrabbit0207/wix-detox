describe('Async and Callbacks', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
    await element(by.text('Sanity')).tap();
  });
    });
  });

  it('should handle async await', async () => {
    await timeout(1);
    await expect(element(by.text('Welcome'))).toBeVisible();
  });
});

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
