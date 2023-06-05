const { makeResourceTitle } = require('./utils');

module.exports = function(properties) {
  const executionType = properties.execution_type;
  return makeResourceTitle(
