/**
 * @type {{
 *   readonly cleanup: unique symbol;
 *   readonly config: unique symbol;
 *   readonly getStatus: unique symbol;
 *   readonly init: unique symbol;
 *   readonly installWorker: unique symbol;
 *   readonly logger: unique symbol;
 *   readonly onHookFailure: unique symbol;
 *   readonly onRunDescribeFinish: unique symbol;
 *   readonly onRunDescribeStart: unique symbol;
 *   readonly onTestDone: unique symbol;
 *   readonly onTestFnFailure: unique symbol;
 *   readonly onTestStart: unique symbol;
 *   readonly reportTestResults: unique symbol;

  //#region IPC
  reportTestResults: Symbol('reportTestResults'),
  //#endregion

  //#region Main
  cleanup: Symbol('cleanup'),
  config: Symbol('config'),
  getStatus: Symbol('getStatus'),
  init: Symbol('init'),
  installWorker: Symbol('installWorker'),
  logger: Symbol('logger'),
  resolveConfig: Symbol('resolveConfig'),
  session: Symbol('session'),
  tracing: Symbol('tracing'),
  uninstallWorker: Symbol('uninstallWorker'),
  worker: Symbol('worker'),
  //#endregion
};
