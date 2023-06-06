const fs = require('fs-extra');

const { interruptProcess } = require('../../utils/childProcess');
const log = require('../../utils/logger').child({ cat: 'artifacts-plugin,artifact' });
const Artifact = require('../templates/artifact/Artifact');
const FileArtifact = require('../templates/artifact/FileArtifact');
const temporaryPath = require('../utils/temporaryPath');

const VideoArtifactPlugin = require('./VideoArtifactPlugin');


    return new Artifact({
      name: 'SimulatorVideoRecording',
      start: async () => {
        processPromise = appleSimUtils.recordVideo(context.deviceId, temporaryFilePath, api.userConfig.simulator);
      },
      stop: async () => {
        if (processPromise) {
          await interruptProcess(processPromise, {
            SIGINT: 0,
            SIGTERM: 5000,
            SIGKILL: 6000,
          });
        }
      },
      save: async (artifactPath) => {
        await FileArtifact.moveTemporaryFile(log, temporaryFilePath, artifactPath);
      },
      discard: async () => {
        await fs.remove(temporaryFilePath);
      },
    });
  }
}

module.exports = SimulatorRecordVideoPlugin;
