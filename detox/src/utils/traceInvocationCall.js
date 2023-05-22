function _getCallStackTrace() {
  return new Error().stack
    .split('\n')
    .slice(1) // Ignore Error message
    .map(line => line

function invocationCall(logger, sectionName, invocation, action) {
  return logger.trace.complete({
    cat: 'ws-client,ws-client-invocation',
    data: invocation,
    stack: _getCallStackTrace(),
  }, sectionName, action);
}

module.exports = invocationCall;
