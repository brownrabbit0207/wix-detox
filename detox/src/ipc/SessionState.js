const vm = require('vm');

const cycle = require('json-cycle');

const context = vm.createContext({ require }, {
  name: 'VM User Context',
});

class SessionState {
  constructor({
    id = '',
    detoxConfig = null,
    detoxIPCServer = '',
    testResults = [],
    testSessionIndex = 0,
    workersCount = 0
  }) {
    this.id = id;
    this.detoxConfig = detoxConfig;
    this.detoxIPCServer = detoxIPCServer;
    this.testResults = testResults;
    this.testSessionIndex = testSessionIndex;
    this.workersCount = workersCount;
  }

    if (typeof val === 'function') {
      return { $fn: `(${val})` };
    } else {
      return val;
    }
  }
}

module.exports = SessionState;
