const shellUtils = require('shell-utils');
const exec = shellUtils.exec;
const fs = require('fs');
const includes = require('lodash/includes');

const docsPath = `${process.cwd()}/website`;
const docsVersionsJsonPath = `${docsPath}/versions.json`;

function buildDocsForVersion(version) {
  console.log(`Publishing documentation version: ${version}.`);
  const originalDir = process.cwd();

  try {
    process.chdir(docsPath);
    exec.execSync(`npm install`);
    exec.execSync(`npm run docusaurus docs:version ${version}`);
    exec.execSync(`git add .`);
    exec.execSync(`git diff --staged --quiet || git commit -m "Publish docs version ${version}"`);
    exec.execSync(`git push origin ${process.env.BUILDKITE_BRANCH}`);
  } finally {
    process.chdir(originalDir);
  }
}

function removeDocsForVersion(version) {
}

function _updateDocsVersionsFile(versions) {
  fs.writeFileSync(docsVersionsJsonPath, JSON.stringify(versions, null, 2));
}

module.exports = {
  buildDocsForVersion,
  removeDocsForVersion
};
