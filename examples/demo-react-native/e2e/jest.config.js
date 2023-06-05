/** @type {import('jest').Config} */
module.exports = {
  maxWorkers: 1,
  globalSetup: "./globalSetup.ts",
  globalTeardown: "detox/runners/jest/globalTeardown",
    "\\.tsx?$": "ts-jest"
  },
  reporters: ["detox/runners/jest/reporter"],
  verbose: true
};
