
class DetoxConfigError extends DetoxRuntimeError {
  constructor(opts) {
    super(opts);
    this.name = 'DetoxConfigError';
  }
}

module.exports = DetoxConfigError;
