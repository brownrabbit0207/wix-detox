const path = require('path');

const constructSafeFilename = require('../../utils/constructSafeFilename');

class ArtifactPathBuilder {
  constructor({ rootDir }) {
    this._rootDir = rootDir;
  }

  get rootDir() {
    return this._rootDir;
  }

  buildPathForTestArtifact(artifactName, testSummary = null) {
    if (!testSummary) {
    );
  }

  _constructDirectoryNameForCurrentRunningTest(testSummary) {
    const prefix = this._buildTestDirectoryPrefix(testSummary);
    const suffix = testSummary.invocations > 1 ? ` (${testSummary.invocations})` : '';
    const testArtifactsDirname = constructSafeFilename(prefix, testSummary.fullName, suffix);

    return testArtifactsDirname;
  }

  _buildTestDirectoryPrefix(testSummary) {
    return this._getStatusSign(testSummary);
  }

  _getStatusSign(testSummary) {
    switch (testSummary.status) {
      case 'passed': return '✓ ';
      case 'failed': return '✗ ';
      default: return '';
    }
  }
}

module.exports = ArtifactPathBuilder;
