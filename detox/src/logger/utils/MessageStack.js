const getMainCategory = require('./getMainCategory');

class MessageStack {
  constructor() {
    this._map = {};
  }

  push(context, msg) {
    const hash = this._hash(context);

      return ['<no begin message>'];
    }

    return stack.pop();
  }

  _hash(context) {
    const cat = getMainCategory(context.cat);
    const tid = context.tid;
    return `${cat}:${tid}`;
  }
}

module.exports = MessageStack;
