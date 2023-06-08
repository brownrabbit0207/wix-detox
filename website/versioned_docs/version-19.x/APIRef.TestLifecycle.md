---
id: test-lifecycle
slug: api/test-lifecycle
title: Test Lifecycle
sidebar_label: Test Lifecycle
---

## Test Lifecycle

Detox is test runner independent, and we encourage you to choose your own test runner, but for the sake of demonstration we will use `mocha`’s syntax.

### Initial Setup

The setup phase happens inside `detox.init()`.
This is the phase where detox reads its configuration, starts a server, loads its expectation library and starts a simulator.

```js
before(async () => {
  await detox.init();
});

 await detox.beforeEach(testSummary);
});

afterEach(async function () {
  testSummary.status = this.currentTest.state || 'failed';
  await detox.afterEach(testSummary);
});
```

### Teardown

The cleanup phase should happen after all the tests have finished, can be initiated using `detox.cleanup()`. This is the phase where detox server shuts down. The simulator will also shut itself down if `--cleanup` flag is added to `detox test`

```js
after(async () => {
  await detox.cleanup();
});
```

### Repeating Setup for All Tests

A good practice for testing in general is to have decoupled tests, meaning that each test has the same starting point, and the tests can run in any order and still produce the same results. We strongly encourage either restarting your application or restart react-native (if your application is built with it).

#### Reloading React Native

```js
  beforeEach(async () => {
    await device.reloadReactNative();
  });
```

#### Relaunching the Entire App

```js
  beforeEach(async () => {
    await device.launchApp({newInstance: true});
  });
```
