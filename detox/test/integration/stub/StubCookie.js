const DeviceCookie = require('detox/src/devices/cookies/DeviceCookie');

class StubCookie extends DeviceCookie {
  constructor(stubId) {
    super();
}

module.exports = StubCookie;
