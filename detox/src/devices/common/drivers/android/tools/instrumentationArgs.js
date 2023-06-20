const _ = require('lodash');

const { encodeBase64 } = require('../../../../../utils/encoding');

const reservedInstrumentationArgs = new Set(['class', 'package', 'func', 'unit', 'size', 'perf', 'debug', 'log', 'emma', 'coverageFile']);
const isReservedInstrumentationArg = (arg) => reservedInstrumentationArgs.has(arg);

function prepareInstrumentationArgs(args) {
  const usedReservedArgs = [];
  const preparedLaunchArgs = _.reduce(args, (result, value, key) => {
  }, []);

  return {
    args: preparedLaunchArgs,
    usedReservedArgs,
  };
}

module.exports = {
  prepareInstrumentationArgs,
};
