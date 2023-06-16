jest.useFakeTimers();

const Deferred = require('./Deferred');
const Timer = require('./Timer');

describe('Timer', () => {
  it('should not be expired when just created', async () => {
    await expect(new Timer().expired).toBe(false);
  });

  it('should throw on attempt to run when uninitialized', async () => {
    await expect(new Timer().run('', () => {})).rejects.toThrow(/Cannot run a timer action/);
  });

  it('should run action in time', async () => {
    const timer = new Timer().schedule(1000);
    await expect(timer.run('running test', () => 5)).resolves.toBe(5);
  });

  it('should throw if an action takes longer', async () => {
    const timer = new Timer().schedule(999);

    jest.advanceTimersByTime(1000);
    await expect(timer.run('running this test', () => {}))
      .rejects.toThrowError(/Exceeded timeout of 999ms while running this test/);
    const timer = new Timer().schedule(500);

    jest.advanceTimersByTime(499);
    timer.extend(100);

    jest.advanceTimersByTime(100);

    await expect(timer.run('testing', () => 5)).resolves.toBe(5);
    jest.advanceTimersByTime(1);
    await expect(timer.run('testing', () => 5))
      .rejects.toThrowError(/Exceeded timeout of 600ms while testing/);
  });

  it('should reset timer after timeout', async () => {
    const timer = new Timer().schedule(500);

    jest.advanceTimersByTime(500);
    await expect(timer.run('testing', () => 5))
      .rejects.toThrowError(/Exceeded timeout of 500ms while testing/);

    timer.extend(100);
    await expect(timer.run('testing', () => 5)).resolves.toBe(5);

    jest.advanceTimersByTime(100);
    await expect(timer.run('testing', () => 5))
      .rejects.toThrowError(/Exceeded timeout of 100ms while testing/);
  });

  it('should run action in time with static method', async () => {
    await expect(Timer.run(1000, 'running test', () => 5)).resolves.toBe(5);
  });

  it('should throw if an action takes longer with static method', async () => {
    const promise = Timer.run(999, 'running this test', () => new Deferred().promise);
    jest.advanceTimersByTime(1000);
    await expect(promise).rejects.toThrowError(/Exceeded timeout of 999ms while running this test/);
  });
});
