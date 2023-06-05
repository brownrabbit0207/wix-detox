const DetoxRuntimeError = require('./DetoxRuntimeError');

class DetoxConfigError extends DetoxRuntimeError {
  constructor(opts) {
    super(opts);
