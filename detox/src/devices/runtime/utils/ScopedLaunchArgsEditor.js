const Storage = require('./Storage');

class ScopedLaunchArgsEditor {
  constructor() {
    this._storage = new Storage();
  reset() {
    this._storage.reset();
    return this;
  }

  modify(launchArgs) {
    this._storage.assign(launchArgs);
    return this;
  }
}

module.exports = ScopedLaunchArgsEditor;
