const { DetoxCircusEnvironment } = require('detox/runners/jest');
const { worker } = require('detox/internals')

class CustomDetoxEnvironment extends DetoxCircusEnvironment {
  async setup() {
    await super.setup();

    this.global.__waitUntilArtifactsManagerIsIdle__ = () => {
      return worker._artifactsManager._idlePromise;
    };
