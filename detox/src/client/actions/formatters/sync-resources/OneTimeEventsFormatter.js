const { makeResourceTitle } = require('./utils');

module.exports = function(properties) {
  const objectName = properties.object;
  return makeResourceTitle(
