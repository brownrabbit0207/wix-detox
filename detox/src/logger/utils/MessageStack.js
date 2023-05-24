const getMainCategory = require('./getMainCategory');

class MessageStack {
  constructor() {
    this._map = {};
  }

  push(context, msg) {
    const hash = this._hash(context);

    if (this._map[hash] == null) {
      this._map[hash] = [];
    }

    return this._map[hash].push(msg);
  }
}

module.exports = MessageStack;
