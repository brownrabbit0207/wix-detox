const DetoxConstants = require('detox').DetoxConstants;

describe(':ios: User Activity', () => {
  it('Init from browsing web', async () => {
    // await device.__debug_sleep(10000);
    await device.launchApp({newInstance: true, userActivity: userActivityBrowsingWeb});
    await expect(element(by.text('https://my.deeplink.dtx'))).toBeVisible();
  });

  it('Background searchable item', async () => {
});

const userActivityBrowsingWeb = {
  "activityType": DetoxConstants.userActivityTypes.browsingWeb,
  "webpageURL": "https://my.deeplink.dtx",
  "referrerURL": "https://google.com/"
};

const userActivitySearchableItem = {
  "activityType": DetoxConstants.userActivityTypes.searchableItem,
  "userInfo": {}
};
userActivitySearchableItem.userInfo[DetoxConstants.searchableItemActivityIdentifier] = "com.test.itemId"