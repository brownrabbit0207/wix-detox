
class StubCookie extends DeviceCookie {
  constructor(stubId) {
    super();
    this.id = stubId;
  }

  get platform() {
    return 'stub';
  }
}

module.exports = StubCookie;
