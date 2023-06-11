jest.mock('signal-exit', () => jest.fn(() => () => {}));
jest.mock('../src/logger/DetoxLogger');
