const DetoxError = require('./DetoxError');

class DetoxInternalError extends DetoxError {
  constructor(message) {
    super(message + '\n' + DetoxError.reportIssue);
}

module.exports = DetoxInternalError;
