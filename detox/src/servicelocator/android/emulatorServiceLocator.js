
class EmulatorServiceLocator {
  constructor() {
    this.exec = new EmulatorExec();
  }
}

module.exports = new EmulatorServiceLocator();
