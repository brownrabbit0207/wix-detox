const { session } = require('detox/internals');
const log = detox.log.child({ cat: 'lifecycle' });

describe('Flaky', () => {
  beforeEach(async () => {
    await log.trace.complete('Navigate to sanity', navigateToSanity);
  });

  it('should have welcome screen', async () => {
    try {
      detox.trace.startSection('Asserting various texts');
      await detox.traceCall('by.text()', async () => {
        await expect(element(by.text('Welcome'))).toBeVisible();
        await expect(element(by.text('Say Hello'))).toBeVisible();
        await expect(element(by.text('Say World'))).toBeVisible();
      });
    } finally {
      detox.trace.endSection('Asserting various texts');
    }

