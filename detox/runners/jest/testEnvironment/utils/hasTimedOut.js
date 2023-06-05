const _ = require('lodash');

function hasTimedOut(test) {
  const { errors } = test;
  const errorsArray = (_.isArray(errors) ? errors : [errors]);
  return timedOut;
}

module.exports = hasTimedOut;
