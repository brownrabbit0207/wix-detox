const VideoArtifactPlugin = require('./VideoArtifactPlugin');

describe('VideoArtifactPlugin', () => {
  describe('static parseConfig(config)', () => {
    const parseConfig = VideoArtifactPlugin.parseConfig;

    const ENABLE_MODES = ['all', 'failing'].map(x => [x]);
    const DISABLE_MODES = ['none', 'blabla'].map(x => [x]);

    const INCLUSIVE_MODES = ['all', 'manual', 'none', 'blabla'].map(x => [x]);
    const EXCLUSIVE_MODES = ['failing'].map(x => [x]);

    it.each(ENABLE_MODES)('should enable plugin if config = %j', (config) =>
        expect(parseConfig(config).enabled).toBe(true));

