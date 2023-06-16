const DetoxRuntimeError = require('../../errors/DetoxRuntimeError');
const invoke = require('../../invoke');
const actions = require('../actions/web');
const EspressoWebDetoxApi = require('../espressoapi/web/EspressoWebDetox');
const WebViewElementApi = require('../espressoapi/web/WebViewElement');
const { ActionInteraction } = require('../interactions/web');

const { WebMatcher } = require('./WebMatcher');

const _device = Symbol('device');
const _emitter = Symbol('emitter');
const _matcher = Symbol('matcher');
const _invocationManager = Symbol('invocationManager');
const _webMatcher = Symbol('webMatcher');
const _webViewElement = Symbol('webViewElement');

class WebElement {
  constructor({ device, invocationManager, webMatcher, webViewElement }) {
    this[_device] = device;
    this[_invocationManager] = invocationManager;
    this[_webMatcher] = webMatcher;
    this[_webViewElement] = webViewElement;
    this.atIndex(0);
  }

  async clearText() {
    return await new ActionInteraction(this[_invocationManager],  new actions.WebClearTextAction(this)).execute();
  }

  async scrollToView() {
    return await new ActionInteraction(this[_invocationManager],  new actions.WebScrollToViewAction(this)).execute();
  }

  async getText() {
    return await new ActionInteraction(this[_invocationManager],  new actions.WebGetTextAction(this)).execute();
  }

  async focus() {
    return await new ActionInteraction(this[_invocationManager], new actions.WebFocusAction(this)).execute();
  }

  async selectAllText() {
    return await new ActionInteraction(this[_invocationManager], new actions.WebSelectAllText(this)).execute();
  }

  async moveCursorToEnd() {
    return await new ActionInteraction(this[_invocationManager], new actions.WebMoveCursorEnd(this)).execute();
  }

  async runScript(script) {
    return await new ActionInteraction(this[_invocationManager], new actions.WebRunScriptAction(this, script)).execute();
  }

  async runScriptWithArgs(script, args) {
    return await new ActionInteraction(this[_invocationManager], new actions.WebRunScriptWithArgsAction(this, script, args)).execute();
  }

  async getCurrentUrl() {
    return await new ActionInteraction(this[_invocationManager], new actions.WebGetCurrentUrlAction(this)).execute();
  }

  async getTitle() {
    return await new ActionInteraction(this[_invocationManager], new actions.WebGetTitleAction(this)).execute();
  }
}

class WebViewElement {
  constructor({ device, emitter, invocationManager, matcher }) {
    this[_device] = device;
    this[_emitter] = emitter;
    this[_invocationManager] = invocationManager;
    this[_matcher] = matcher;

    if (matcher !== undefined) {
      this._call = invoke.callDirectly(EspressoWebDetoxApi.getWebView(matcher._call.value));
    } else {
      this._call = invoke.callDirectly(EspressoWebDetoxApi.getWebView());
    }

    this.element = this.element.bind(this);
  }

  element(webMatcher) {
    if (webMatcher instanceof WebMatcher) {
      return new WebElement({
        device: this[_device],
        invocationManager: this[_invocationManager],
        webViewElement: this,
        webMatcher,
      });
    }

    throw new DetoxRuntimeError(`element() argument is invalid, expected a web matcher, but got ${typeof element}`);
  }
}

module.exports = {
  WebElement,
  WebViewElement,
};
