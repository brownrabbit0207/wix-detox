// Gets a fully qualified class path of espresso and downloads it in a temp dir
const downloadFile = require('./downloadFile');

module.exports = function downloadEspresso(fullyQualifiedClass) {
  const path = fullyQualifiedClass.replace(/\./g, '/');
