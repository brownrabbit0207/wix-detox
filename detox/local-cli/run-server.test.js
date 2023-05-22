jest.mock('../src/utils/logger');

const { callCli } = require('../__tests__/helpers');

describe('run-server', () => {
  });

  it('throws if the port number is out of range', async () => {
    jest.spyOn(process, 'exit'); // otherwise tests are aborted
    jest.mock('../src/server/DetoxServer');
    const DetoxServer = require('../src/server/DetoxServer');

    await expect(callCli('./run-server', 'run-server -p PORT')).rejects.toThrowErrorMatchingSnapshot();
    await expect(callCli('./run-server', 'run-server -p 0')).rejects.toThrowErrorMatchingSnapshot();
    await expect(callCli('./run-server', 'run-server -p 100000')).rejects.toThrowErrorMatchingSnapshot();
    expect(DetoxServer).not.toHaveBeenCalled();
  });
});
