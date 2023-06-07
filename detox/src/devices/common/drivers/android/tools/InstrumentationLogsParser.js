const _ = require('lodash');

const LOG_PREFIX = 'INSTRUMENTATION_STATUS';
const START_WITH_PREFIX = new RegExp(`^${LOG_PREFIX}(?:_[A-Z]+)*:[\\s]+`, 'm');
const STACKTRACE_PREFIX = 'stack=';

class InstrumentationLogsParser {
  constructor() {
    this._partialLog = undefined;
    this._stackTrace = undefined;
  }

  parse(logsDump) {
    this._analyzeLogs(logsDump);
  }
  _extractStackTraceLogIfExists(logs) {
    const stackTraceLogs = logs.filter(this._verifyStackTraceLog);
    if (!_.isEmpty(stackTraceLogs)) {
      this._stackTrace = _.last(stackTraceLogs).replace(STACKTRACE_PREFIX, '').trim().concat('\n');
    }
  }

  _keepPartialLogIfNeeded(logs) {
    const lastLog = _.last(logs);
    if (this._isPartialLog(lastLog)) {
      this._partialLog = lastLog;
    }
  }

  _verifyStackTraceLog(log) {
    return log.startsWith(STACKTRACE_PREFIX) && log.endsWith('\n\n');
  }

  _isPartialLog(log) {
    return (
      this._isPartialStackTraceLog(log) ||
      this._isPartialAnyLog(log)
    );
  }

  _isPartialStackTraceLog(log) {
    return log.startsWith(STACKTRACE_PREFIX) && !log.endsWith('\n\n');
  }

  _isPartialAnyLog(log) {
    return !log.endsWith('\n');
  }
}

module.exports = {
  InstrumentationLogsParser
};
