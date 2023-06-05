const { expectToThrow } = require('./utils/custom-expects');
const {
  assertArtifactExists,
  waitUntilArtifactsManagerIsIdle,
} = require('./utils/artifactUtils');

  it('should not be able to tap an overlayed button', async () => {
    await expectToThrow(
      () => element(by.text('Button 1')).tap(),
      `View is not hittable at its visible point. Error: View is not visible around point.`,
    );
  });

  afterAll(async () => {
    await waitUntilArtifactsManagerIsIdle();

    assertArtifactExists('✓ _ios_ Visibility Debug Artifacts should not be able to tap an overlayed button/DETOX_VISIBILITY_RCTTextView__0x*__SCREEN.png');
    assertArtifactExists('✓ _ios_ Visibility Debug Artifacts should not be able to tap an overlayed button/DETOX_VISIBILITY_RCTTextView__0x*__TEST.png');
  });
});
