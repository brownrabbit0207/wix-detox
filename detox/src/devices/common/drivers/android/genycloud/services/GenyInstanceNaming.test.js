jest.mock('../../../../../../../internals', () => ({}));

describe('Genymotion-Cloud instance unique-name strategy', () => {
  let sessionId, workerId;

  function uut() {
    const GenyInstanceNaming = require('./GenyInstanceNaming');
    return new GenyInstanceNaming();
  }

  beforeEach(() => {
    Object.defineProperties(require('../../../../../../../internals'), {
      session: { get: () => ({ id: sessionId }) } ,
      worker: { get: () => ({ id: workerId }) } ,
    });
});
