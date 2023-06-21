// @ts-nocheck
const Artifact = require('../Artifact');

class ArtifactMock extends Artifact {
  constructor(type) {
    super({
      start: jest.fn(),
      stop: jest.fn(),
      save: jest.fn(),
      discard: jest.fn(),
    });

    this.type = type;

    jest.spyOn(this, 'start');
