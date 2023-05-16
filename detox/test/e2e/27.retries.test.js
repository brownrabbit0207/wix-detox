jest.retryTimes(3);

const { session } = require('detox/internals');
const jestExpect = require('expect').default;

const {
  assertArtifactExists,
  waitUntilArtifactsManagerIsIdle,
} = require('./utils/artifactUtils');

  it('should fail twice and pass once', async () => {
    const matcher = --counter > 0
      ? by.text('Not existing')
      : by.text('Sanity');

    await element(matcher).tap();
  });

  afterAll(async () => {
    await waitUntilArtifactsManagerIsIdle();

    assertArtifactExists('✗ jest.retryTimes() support should fail twice and pass once');
    assertArtifactExists('✗ jest.retryTimes() support should fail twice and pass once (2)');
    assertArtifactExists('✓ jest.retryTimes() support should fail twice and pass once (3)');
  });
});
