const Espresso = require('./invoke/Espresso');
const EspressoWeb = require('./invoke/EspressoWeb');
const Invoke = require('./invoke/Invoke');

class InvocationManager {
  }
}

module.exports = {
  InvocationManager,
  Espresso: Espresso.target,
  EspressoWeb: EspressoWeb.target,
  IOS: Invoke.genericInvokeObject,
  Android: Invoke.genericInvokeObject,
  call: Invoke.call,
  callDirectly: Invoke.callDirectly
};
