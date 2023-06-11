
module.exports = require('../../migration')(
  __filename,
  path.join(__dirname, '../../jest/testEnvironment/index.js')
);
