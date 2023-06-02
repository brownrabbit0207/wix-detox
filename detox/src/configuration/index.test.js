// @ts-nocheck
jest.mock('../utils/argparse');

const os = require('os');
const path = require('path');

const DetoxConfigErrorComposer = require('../errors/DetoxConfigErrorComposer');

describe('composeDetoxConfig', () => {
  let args;
  let configuration;

  /** @type {DetoxConfigErrorComposer} */
  let errorComposer;

  beforeEach(() => {
    errorComposer = new DetoxConfigErrorComposer();

    args = {};

    require('../utils/argparse').getEnvValue.mockImplementation(key => args[key]);
    configuration = require('./index');
  });

  describe('composeDetoxConfig', () => {
      } catch (e) {
        // NOTE: we want errorComposer to be mutated, that's why we assert inside try-catch
        expect(e).toEqual(errorComposer.configurationShouldNotUseLegacyFormat());
      }
    });

    it('should return a complete Detox config merged with the file configuration', async () => {
      const config = await configuration.composeDetoxConfig({
        cwd: path.join(__dirname, '__mocks__/configuration/packagejson'),
        argv: {
          configuration: 'another',
          'device-name': 'iPhone XS',
          cleanup: true,
          reuse: true,
          'record-logs': 'all',
        },
        testRunnerArgv: {
          config: 'e2e/jest.config.js',
        },
        override: {
          artifacts: {
            pathBuilder: '@some/pathbuilder-implementation',
            plugins: {
              log: 'none',
              video: 'failing',
            },
          },
          configurations: {
            another: {
              device: {
                type: 'ios.simulator',
                device: 'iPhone X'
              },
              app: {
                type: 'ios.app',
                binaryPath: 'path/to/app',
              },
            },
          },
        }
      });

      expect(config).toMatchObject({
        errorComposer: {
          configurationName: 'another',
          filepath: path.join(__dirname, '__mocks__/configuration/packagejson/package.json'),
        },
        artifacts: {
          pathBuilder: '@some/pathbuilder-implementation',
          plugins: {
            log: {
              enabled: true,
              keepOnlyFailedTestsArtifacts: false,
            },
            video: {
              enabled: true,
              keepOnlyFailedTestsArtifacts: true,
            },
          },
        },
        behavior: {
          init: {
            exposeGlobals: true,
            reinstallApp: false,
          },
          cleanup: {
            shutdownDevice: true,
          }
        },
        cli: {
          configuration: 'another',
          deviceName: 'iPhone XS',
          cleanup: true,
          reuse: true,
          recordLogs: 'all',
        },
        device: expect.objectContaining({
          type: 'ios.simulator',
          device: {
            type: 'iPhone XS',
          },
        }),
        logger: {
          level: 'info',
          overrideConsole: true,
          options: expect.objectContaining({}),
        },
        testRunner: {
          args: {
            $0: 'jest',
            config: 'e2e/jest.config.js',
            _: [],
          },
        },
        session: expect.objectContaining({
          server: 'ws://localhost:9999',
          sessionId: 'external file works',
        }),
      });
    });
  });
});
