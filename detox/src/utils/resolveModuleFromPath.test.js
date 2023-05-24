const path = require('path');

const resolveModuleFromPath = require('./resolveModuleFromPath');

const RELATIVE_PATH_TO_PACKAGE_JSON = '../../package.json';

describe('resolveModuleFromPath', () => {
  let packageJson;

  beforeEach(() => {
    packageJson = require(RELATIVE_PATH_TO_PACKAGE_JSON);
  });

  it('should resolve absolute paths', async () => {
    const absolutePath = require.resolve(RELATIVE_PATH_TO_PACKAGE_JSON);
