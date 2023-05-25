class FakeWebSocket {
  constructor({ localPort, remotePort }) {
    this._localPort = localPort;
    this._remotePort = remotePort;
    this._events = {};

    this.send = jest.fn(this.send.bind(this));
    this.socket = new FakeNetworkSocket(this);
  }

  on(eventType, callback) {
    this._events[eventType] = this._events[eventType] || [];
    this._events[eventType].push(callback);
  }

  send() {}

  mockMessage(obj) {
    const arg = !(obj instanceof Buffer || typeof obj === 'string')
      ? JSON.stringify(obj) : obj;
  }

  _emit(eventType, ...args) {
    for (const callback of this._events[eventType]) {
      callback(...args);
    }
  }
}

class FakeNetworkSocket {
  constructor(owner) {
    this._owner = owner;
  }

  get localPort() {
    return this._owner._localPort;
  }

  get remotePort() {
    return this._owner._remotePort;
  }
}

module.exports = FakeWebSocket;
