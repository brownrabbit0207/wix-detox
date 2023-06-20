const methods = {
  startSection(logger) {
    return (msg, args) => {
      if (args !== undefined) {
        return logger.trace.begin(args, msg);
      } else {
        return logger.trace.begin(msg);
      }
    };
  },
  traceCall(logger) {
    return (name, action, args = {}) => logger.trace.complete(args, name, action);
  },
};

function installLegacyTracerInterface(logger, target) {
  target.traceCall = methods.traceCall(logger);
  target.trace = Object.freeze({
    startSection: methods.startSection(logger),
    endSection: methods.endSection(logger),
  });

  return this;
}

module.exports = { install: installLegacyTracerInterface };
