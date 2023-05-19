const ThreadDispatcher = require('./ThreadDispatcher');
const getMainCategory = require('./getMainCategory');

class CategoryThreadDispatcher {
  constructor() {
    /** @type {Record<string, ThreadDispatcher>} */
    this._dispatchers = {};
  }

  /**
   * @param {'B' | 'E' | 'i'} ph
   * @param {string[] | undefined} cat
   * @param {string | number} id
   * @returns {number}
   */
  resolve(ph, cat, id) {
    const dispatcher = this._resolveDispatcher(cat);

    switch (ph) {
      case 'B': return dispatcher.begin(id);
      case 'E': return dispatcher.end(id);
      default: return dispatcher.resolve(id);
    }
  }

