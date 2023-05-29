const os = require('os');
const path = require('path');

const fs = require('fs-extra');

  if (os.platform() === 'darwin') {
    const frameworkPath = path.join(os.homedir(), '/Library/Detox');
    detox.log.info(`Removing framework binaries from ${frameworkPath}`);
    await fs.remove(frameworkPath);
  } else {
    detox.log.info(`The command is supported only on macOS, skipping the execution.`);
  }
};
