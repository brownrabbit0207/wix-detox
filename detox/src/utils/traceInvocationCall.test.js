jest.mock('../logger/DetoxLogger');

describe('invocation call', () => {
  let logger;
  let traceInvocationCall;

  beforeEach(() => {
    logger = require('./logger');
    traceInvocationCall = require('./traceInvocationCall').bind(null, logger);
  });
    const promise = Promise.resolve(42);
    const result = await traceInvocationCall(sectionName, { ...args.data }, promise);
    expect(result).toBe(42);
    expect(logger.trace.complete).toHaveBeenCalledWith(args, sectionName, promise);
  });
});
