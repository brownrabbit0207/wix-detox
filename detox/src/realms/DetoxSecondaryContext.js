const fs = require('fs-extra');

const { DetoxInternalError } = require('../errors');
const SessionState = require('../ipc/SessionState');

const DetoxContext = require('./DetoxContext');
const symbols = require('./symbols');

// Protected symbols
const { $restoreSessionState, $sessionState, $worker } = DetoxContext.protected;

//#region Private symbols
const _ipcClient = Symbol('ipcClient');
//#endregion

class DetoxSecondaryContext extends DetoxContext {
  constructor() {
    super();

    /**
     * @private
     * @type {import('../ipc/IPCClient')}
     */
    this[_ipcClient] = null;
  }
    if (opts.workerId !== null) {
      await this[symbols.installWorker](opts);
    }
  }

  /** @override */
  async [symbols.cleanup]() {
    try {
      if (this[$worker]) {
        await this[symbols.uninstallWorker]();
      }
    } finally {
      if (this[_ipcClient]) {
        await this[_ipcClient].dispose();
        this[_ipcClient] = null;
      }
    }
  }

  /** @override */
  async [symbols.installWorker](opts = {}) {
    const workerId = opts.workerId || 'worker';
    await this[_ipcClient].registerWorker(workerId);
    await super[symbols.installWorker]({ ...opts, workerId });
  }
  //#endregion

  //#region Protected members
  /**
   * @protected
   * @override
   * @return {SessionState}
   */
  [$restoreSessionState]() {
    return SessionState.parse(fs.readFileSync(process.env.DETOX_CONFIG_SNAPSHOT_PATH));
  }
  //#endregion
}

module.exports = DetoxSecondaryContext;
