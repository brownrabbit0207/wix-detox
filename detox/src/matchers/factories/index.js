const DetoxRuntimeError = require('../../errors/DetoxRuntimeError');

class MatchersFactory {
  createMatchers() {}
}

class Android extends MatchersFactory {
  createMatchers({ invocationManager, runtimeDevice, eventEmitter }) {
    const AndroidExpect = require('../../android/AndroidExpect');
    return new AndroidExpect({ invocationManager, device: runtimeDevice, emitter: eventEmitter });
  }
}

class Ios extends MatchersFactory {
  createMatchers({ invocationManager, eventEmitter }) {
    this._module = module;
  }

  createMatchers(deps) {
    return new this._module.ExpectClass(deps);
  }
}

module.exports = {
  Android,
  Ios,
  External,
};
