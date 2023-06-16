const fs = require('fs-extra');

const { interruptProcess } = require('../../utils/childProcess');
const log = require('../../utils/logger').child({ cat: 'artifacts-plugin,artifact' });
const Artifact = require('../templates/artifact/Artifact');
const FileArtifact = require('../templates/artifact/FileArtifact');
const temporaryPath = require('../utils/temporaryPath');

const VideoArtifactPlugin = require('./VideoArtifactPlugin');

class SimulatorRecordVideoPlugin extends VideoArtifactPlugin {
  constructor(config) {
    super(config);

    this.appleSimUtils = config.appleSimUtils;
  }

  createTestRecording() {
    const { api, context, appleSimUtils } = this;
    const temporaryFilePath = temporaryPath.for.mp4();
    let processPromise = null;

    return new Artifact({
      name: 'SimulatorVideoRecording',
      start: async () => {
