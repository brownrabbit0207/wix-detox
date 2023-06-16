const _ = require('lodash');

const argparse = require('../utils/argparse');

const asBoolean = (value) => {
  if (typeof value === 'boolean') {
    return value;
  }

  return value != null
    ? (value !== 'false' && value !== '0' && value !== '')
    : undefined;
};

const asNumber = (value) => {
  if (typeof value === 'number') {
    return value;
  }

  return value != null && value !== ''
    ? Number(value)
    : undefined;
};

function collectCliConfig({ argv }) {
    loglevel: get('loglevel'),
    noColor: asBoolean(get('no-color')),
    reuse: asBoolean(get('reuse')),
    useCustomLogger: asBoolean(get('use-custom-logger')),
    retries: asNumber(get('retries')),
    inspectBrk: asBoolean(get('inspect-brk')),
    start: get('start'),
  }, _.isUndefined);
}

module.exports = collectCliConfig;
