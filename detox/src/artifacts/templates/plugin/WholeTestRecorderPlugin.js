/* eslint @typescript-eslint/no-unused-vars: ["error", { "args": "none" }] */
const ArtifactPlugin = require('./ArtifactPlugin');

/***
 * @abstract
 */
class WholeTestRecorderPlugin extends ArtifactPlugin {
  constructor({ api }) {
    super({ api });

    /** @type {*} */
    this.testRecording = null;
  }

  async onTestStart(testSummary) {
    await super.onTestStart(testSummary);

    if (this.enabled) {
      this.testRecording = this.createTrackedTestRecording();
      await this.testRecording.start();
   * @protected
   */
  createTrackedTestRecording(config) {
    const recording = this.createTestRecording(config);
    this.api.trackArtifact(recording);

    return recording;
  }

  /***
   * @abstract
   * @protected
   */
  createTestRecording(config) {}

  /***
   * @abstract
   */
  async preparePathForTestArtifact(testSummary) {} // eslint-disable-line no-unused-vars

  _startSavingTestRecording(testRecording, testSummary) {
    this.api.requestIdleCallback(async () => {
      const recordingArtifactPath = await this.preparePathForTestArtifact(testSummary);
      await testRecording.save(recordingArtifactPath);
      this.api.untrackArtifact(testRecording);
    });
  }

  _startDiscardingTestRecording(testRecording) {
    this.api.requestIdleCallback(async () => {
      await testRecording.discard();
      this.api.untrackArtifact(testRecording);
    });
  }
}

module.exports = WholeTestRecorderPlugin;
