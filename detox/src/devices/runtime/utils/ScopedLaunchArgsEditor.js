const Storage = require('./Storage');

class ScopedLaunchArgsEditor {
  constructor() {
    this._storage = new Storage();
  }

  get() {
    return this._storage.get();
  }

module.exports = ScopedLaunchArgsEditor;
