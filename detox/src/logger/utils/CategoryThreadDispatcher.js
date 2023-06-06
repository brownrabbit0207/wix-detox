const ThreadDispatcher = require('./ThreadDispatcher');
const getMainCategory = require('./getMainCategory');

class CategoryThreadDispatcher {
  constructor() {
    /** @type {Record<string, ThreadDispatcher>} */
    this._dispatchers = {};
  }

  /**
      default: return dispatcher.resolve(id);
    }
  }

  /** @returns {ThreadDispatcher} */
  _resolveDispatcher(cat) {
    const mainCategory = getMainCategory(cat);
    if (!this._dispatchers[mainCategory]) {
      this._dispatchers[mainCategory] = new ThreadDispatcher(mainCategory);
    }

    return this._dispatchers[mainCategory];
  }
}

module.exports = CategoryThreadDispatcher;
