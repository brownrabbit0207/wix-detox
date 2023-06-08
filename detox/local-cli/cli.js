#!/usr/bin/env node
const fs = require('fs');

const _ = require('lodash');
const yargs = require('yargs');

const logger = require('../internals').log.child({ cat: 'cli' });
const DetoxError = require('../src/errors/DetoxError');

const { isErrorAlreadyLogged } = require('./utils/cliErrorHandling');

yargs
  .scriptName('detox')
  .parserConfiguration({
    'boolean-negation': true,
    'camel-case-expansion': false,
    'dot-notation': false,
    'duplicate-arguments-array': false,
    'populate--': true,
  })
    }

    if (msg) {
      logger.error(msg + '\n');
      program.showHelp();
    }
  })
  .parse();
