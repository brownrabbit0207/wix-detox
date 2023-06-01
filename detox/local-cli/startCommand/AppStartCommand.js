const execa = require('execa');

const detox = require('../../internals');
const { DetoxRuntimeError } = require('../../src/errors');
const Deferred = require('../../src/utils/Deferred');
const log = detox.log.child({ cat: ['lifecycle', 'cli'] });

class AppStartCommand {
  constructor({ cmd, passthrough = [], forceSpawn = false }) {
    this._id = Math.random();
    this._cmd = cmd;
    this._passthrough = passthrough;
    this._forceSpawn = forceSpawn;

    this._cpHandle = null;
    this._cpDeferred = new Deferred();
  }

  execute() {
    const cmd = [this._cmd, ...this._passthrough].join(' ');
      const reason = code == null ? `signal ${signal}` : `code ${code}`;
      const msg = `Command exited with ${reason}: ${cmd}`;
      if (signal || code === 0) {
        onEnd(msg, code, signal);
      } else {
        onError(msg, code, signal);
      }

      this._cpHandle = null;
    });

    return this._cpDeferred.promise;
  }

  async stop() {
    if (this._cpHandle) {
      this._cpHandle.kill();
    }

    return this._cpDeferred.promise;
  }
}

module.exports = AppStartCommand;
