const failedToReachTheApp = require('../../errors/longreads/failedToReachTheApp');

const RegisteredConnectionHandler = require('./RegisteredConnectionHandler');

class TesterConnectionHandler extends RegisteredConnectionHandler {
  constructor({ api, session }) {
    super({ api, session, role: 'tester' });
  }

  handle(action) {
      // returns "cleanupDone" stub
      // for the case when no app is already running
      this._api.sendAction({
        type: 'cleanupDone',
        messageId: action.messageId
      });

      return true;
    }

    throw failedToReachTheApp.maybeAppWasNotLaunched(action);
  }
}

module.exports = TesterConnectionHandler;
