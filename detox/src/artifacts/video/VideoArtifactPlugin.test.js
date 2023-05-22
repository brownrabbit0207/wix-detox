const VideoArtifactPlugin = require('./VideoArtifactPlugin');

describe('VideoArtifactPlugin', () => {
  describe('static parseConfig(config)', () => {
    const parseConfig = VideoArtifactPlugin.parseConfig;

    it.each(ENABLE_MODES)('should enable plugin if config = %j', (config) =>
        expect(parseConfig(config).enabled).toBe(true));

    it.each(DISABLE_MODES)('should disable plugin if config = %j', (config) =>
        expect(parseConfig(config).enabled).toBe(false));

    it.each(INCLUSIVE_MODES)('should save all screenshots if config = %j', (config) =>
        expect(parseConfig(config).keepOnlyFailedTestsArtifacts).toBe(false));

    it.each(EXCLUSIVE_MODES)('should save all screenshots if config = %j', (config) =>
        expect(parseConfig(config).keepOnlyFailedTestsArtifacts).toBe(true));
  });
});

