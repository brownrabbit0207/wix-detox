---
id: mocha
slug: guide/mocha
title: Mocha Setup Guide
sidebar_label: Mocha Setup Guide
---

## Mocha Setup Guide

This guide describes how to install [Mocha](https://mochajs.org) as a test runner to be used by Detox for running the E2E tests.

Before starting with Mocha setup, be sure to complete the preliminary sections of the [Getting Started](introduction/getting-started.md) guide.

```bash npm2yarn
npm install mocha --save-dev --no-package-lock
```

#### 2. Set up Test-code Scaffolds

```sh
detox init -r mocha
```

> **Note:** errors occurring in the process may appear in red.

If things go well, you should to have this set up:

- An `e2e/` folder in your project root
- An `e2e/.mocharc.json` file; [example](https://github.com/wix/Detox/tree/master/examples/demo-react-native/e2e/.mocharc.json)
- An `e2e/init.js` file; [example](https://github.com/wix/Detox/tree/master/examples/demo-react-native/e2e/init.js)
- An `e2e/firstTest.spec.js` file with content similar to [this](https://github.com/wix/Detox/tree/master/examples/demo-react-native/e2e/example.spec.js).
