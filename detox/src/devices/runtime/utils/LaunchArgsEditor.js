const _ = require('lodash');

const ScopedLaunchArgsEditor = require('./ScopedLaunchArgsEditor');

class LaunchArgsEditor {
  constructor() {
    this._local = new ScopedLaunchArgsEditor();
    this._shared = new ScopedLaunchArgsEditor();
  }

  get shared() {
    return this._shared;
  }

  modify(launchArgs) {
