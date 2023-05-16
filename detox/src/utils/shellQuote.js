const _ = require('lodash');
const shellQuote = require('shell-quote');

const { autoEscape } = require('../../src/utils/shellUtils');

function quote(argv) {
  return argv.map(arg => autoEscape(arg)).join(' ');
}

function parse(str) {
      return arg;
    })
    .compact()
    .value();
}

module.exports = {
  parse,
  quote,
};
