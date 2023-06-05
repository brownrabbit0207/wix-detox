const _ = require('lodash');

const { encodeBase64 } = require('../../../../../utils/encoding');

const reservedInstrumentationArgs = new Set(['class', 'package', 'func', 'unit', 'size', 'perf', 'debug', 'log', 'emma', 'coverageFile']);

    let valueEncoded = valueAsString;
    if (isReservedInstrumentationArg(key)) {
      usedReservedArgs.push(key);
    } else if (!key.startsWith('detox')) {
      valueEncoded = encodeBase64(valueAsString);
    }

    result.push('-e', key, valueEncoded);
    return result;
  }, []);

  return {
    args: preparedLaunchArgs,
    usedReservedArgs,
  };
}

module.exports = {
  prepareInstrumentationArgs,
};
