const path = require('path');
const { resolveConfig } = require('detox/internals');

const maxWorkersMap = {
  'android.emulator': 3,
  'android.genycloud': 5,
  'ios.simulator': 2,
};

module.exports = async () => {
  const config = await resolveConfig();

  const reporters = [
    '<rootDir>/runners/jest/reporter',
    ['jest-allure2-reporter', {
    ],
    'setupFilesAfterEnv': ['./test/e2e/setup.js'],
    'globalSetup': '<rootDir>/runners/jest/globalSetup',
    'globalTeardown': '<rootDir>/runners/jest/globalTeardown',
    'testTimeout': 120000,
    'reporters': reporters,
    'verbose': true,
    'bail': false,
    'maxWorkers': process.env.CI ? maxWorkersMap[config.device.type] || 1 : 1,
    'collectCoverageFrom': [
      'src/**/*.js',
      '!**/__test/**',
      '!**/__mocks__/**',
      '!**/*.mock.js',
      '!**/*.test.js'
    ]
  };
};
