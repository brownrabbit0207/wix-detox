---
id: parallel-test-execution
slug: guide/parallel-test-execution
title: Parallel Test Execution
sidebar_label: Parallel Test Execution
---

## Parallel Test Execution

Detox can leverage multi worker support of JS test runners ([Jest](http://jestjs.io/docs/en/cli#maxworkers-num), [AVA](https://github.com/avajs/ava#process-isolation), etc.).

By default `detox test` will run the test runner with one worker (it will pass `--maxWorkers=1` to Jest CLI, Mocha is unaffected). Worker count can be controlled by adding `--workers n` to `detox test`, read more in [`detox-cli` section](APIRef.DetoxCLI.md#test).

### Device Creation

The lock file location is determined by the OS, and [defined here](https://github.com/wix/detox/blob/master/detox/src/utils/appdatapath.js).

- **MacOS**: `~/Library/Detox/device.registry.state.lock`
- **Linux**: `~/.local/share/Detox/device.registry.state.lock`
- **Windows**: `%LOCALAPPDATA%/data/Detox/device.registry.state.lock` or `%USERPROFILE%/Application Data/Detox/device.registry.state.lock`

#### Persisting the Lock File

By default, once all workers finish their test runs, Detox will delete the lock file. Under certain conditions, you may want to persist the lock file. Use the `--keepLockFile` flag to disable automatic deletion.
