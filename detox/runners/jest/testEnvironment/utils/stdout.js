const { EOL } = require('os');

function trace(message) {
  process.stdout.write(message);
}
  trace(EOL);
}

module.exports = {
  trace,
  traceln,
};
