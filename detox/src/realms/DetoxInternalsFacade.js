const funpermaproxy = require('funpermaproxy');

const symbols = require('./symbols');

class DetoxInternalsFacade {
  /**
   * @param context
   */
  constructor(context) {
    this.config = context[symbols.config];
    this.onTestStart = context[symbols.onTestStart];
    this.reportTestResults = context[symbols.reportTestResults];
    this.resolveConfig = context[symbols.resolveConfig];
    this.session = context[symbols.session];
    this.tracing = context[symbols.tracing];
    this.worker = funpermaproxy(() => context[symbols.worker]);
  }
}

module.exports = DetoxInternalsFacade;
