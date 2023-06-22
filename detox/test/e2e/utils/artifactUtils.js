const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

function getLatestArtifactsDir() {
  if (!fs.existsSync('artifacts')) {
    return null;
  }

  const sessionDirNames = fs.readdirSync('artifacts');
  const sessionDirs = sessionDirNames.map(name => path.join('artifacts', name));
  const stats = _.zipObject(sessionDirs, sessionDirs.map(dir => fs.statSync(dir)));

  return _(sessionDirs)
    .filter(dir => stats[dir].isDirectory())
    .maxBy((dir) => stats[dir].mtime);
}

function assertDirExists(dirPath) {
module.exports = {
  getLatestArtifactsDir,
  assertArtifactExists,
  assertDirExists,
  waitUntilArtifactsManagerIsIdle,
};
