// @ts-nocheck
const Artifact = require('../Artifact');

class ArtifactMock extends Artifact {
  constructor(type) {

    this.type = type;

    jest.spyOn(this, 'start');
    jest.spyOn(this, 'stop');
    jest.spyOn(this, 'save');
    jest.spyOn(this, 'discard');
  }
}

module.exports = ArtifactMock;
