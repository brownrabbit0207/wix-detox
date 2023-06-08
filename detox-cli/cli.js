#!/usr/bin/env node
const cp = require('child_process');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

/**
 * @param {string} msg
 */
function log(msg) {
  console.error(chalk.red(msg));
}

function main([_$0, _detox, ...cliArgs]) {
  const [command] = cliArgs;

  if (command === 'recorder' && process.platform === 'darwin') {
    return spawnRecorder(cliArgs);
  } else {
    return spawnDetoxBinary(cliArgs);
    env: {
      ...process.env,
      [PATH]: [nodeBinariesPath, process.env.PATH].join(path.delimiter),
    }
  };

  const result = isWin32
    // { shell: true } option seems to break quoting on windows? Otherwise this would be much simpler.
    ? cp.spawnSync('cmd', ['/c', binaryPath, ...cliArgs], spawnOptions)
    : cp.spawnSync(binaryPath, cliArgs, spawnOptions);

  return result.status;
}

function spawnRecorder([_recorder, ...recorderArgs]) {
  const detoxRecorderPath = path.join(process.cwd(), 'node_modules/detox-recorder');
  const detoxRecorderCLIPath = path.join(detoxRecorderPath, 'DetoxRecorderCLI');

  if (!fs.existsSync(detoxRecorderCLIPath)) {
    log(`Detox Recorder is not installed in this directory: ${detoxRecorderPath}`);
    return 1;
  }

  const result = cp.spawnSync(detoxRecorderCLIPath, recorderArgs, { stdio: 'inherit' });
  return result.status;
}

function findPathKey() {
  return Object.keys(process.env).find(isCaseInsensitivePath);
}

function isCaseInsensitivePath(key) {
  return key.toLowerCase() === 'path';
}

process.exit(main(process.argv));
