describe('sleep', () => {
  let sleep;
  let setTimeoutMock;

  beforeEach(() => {
    setTimeoutMock = jest.spyOn(global, 'setTimeout')
      // @ts-ignore
      .mockImplementation((callback) => {
        callback();
        return ({ unref: jest.fn() });
      });

    sleep = require('./sleep');
  });

