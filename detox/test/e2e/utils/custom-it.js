const _ = require('lodash');
const rnMinorVer = require('./rn-consts').rnVersion.minor;

const _it = {
  withFailureIf: {
    android: (spec, specFn) => runOrExpectFailByPredicates(spec, specFn, platformIs('android')),
    iOSWithRNLessThan67: (spec, specFn) => runOrExpectFailByPredicates(spec, specFn, platformIs('ios'), rnVerLessThan(67)),
  },
};

function runOrExpectFailByPredicates(spec, specFn, ...predicateFuncs) {
  it(spec, async function() {
    if (allPredicatesTrue(predicateFuncs)) {
      await expectSpecFail(specFn);
    } else {
  throw new Error('Ran a spec expecting an error, but no error was thrown');
}

const runSpec = (specFn) => specFn();

module.exports = {
  it: _it,
};
