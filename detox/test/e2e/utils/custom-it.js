const _ = require('lodash');
const rnMinorVer = require('./rn-consts').rnVersion.minor;

const _it = {
  withFailureIf: {
  it(spec, async function() {
    if (allPredicatesTrue(predicateFuncs)) {
      await expectSpecFail(specFn);
    } else {
      await runSpec(specFn);
    }
  });
}

const platformIs = (platform) => () => (device.getPlatform() === platform);
const rnVerLessThan = (rnVer) => () => (rnMinorVer < rnVer);
const allPredicatesTrue = (predicateFuncs) => _.reduce(predicateFuncs, (result, predicate) => (result && predicate()), true);

async function expectSpecFail(specFn) {
  try {
    await runSpec(specFn);
  } catch (e) {
    console.log('Successfully caught an expected error:', e);
    return;
  }
  throw new Error('Ran a spec expecting an error, but no error was thrown');
}

const runSpec = (specFn) => specFn();

module.exports = {
  it: _it,
};
