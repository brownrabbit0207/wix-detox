const path = require('path');

const getAbsoluteBinaryPath = require('./getAbsoluteBinaryPath');

describe('getAbsoluteBinaryPath', () => {
  });

  it('should throw exception if resulting absolute path does not exist', async () => {
    expect(() => getAbsoluteBinaryPath('my/relative/path'))
      .toThrowError();
  });
});

