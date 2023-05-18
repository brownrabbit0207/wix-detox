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
      getEnvironmentInfo: false,
      overwriteResultsDir: !process.env.CI,
    }]
  ];

      'src/**/*.js',
      '!**/__test/**',
      '!**/__mocks__/**',
      '!**/*.mock.js',
      '!**/*.test.js'
    ]
  };
};
