# Parallel Test Execution

Detox comes out of the box with multi-worker support thanks to ([Jest's feature](http://jestjs.io/docs/en/cli#maxworkers-num),  etc.).

By default `detox test` will run the test runner with one worker. Worker count can be controlled by forwarding `--maxWorkers <N>` to Jest via [`detox test`](../cli/test.md).

## Device Creation

While running with multiple workers, Detox might not have an available simulator for every worker.
If no simulator is available for that worker, the worker will create one with the name `{name}-Detox`.

## Lock File

Simulators/emulators run on a different process, outside of node, and require some sort of lock mechanism to make sure only one process controls a simulator in a given time. Therefore, Detox 7.4.0 introduced `device.registry.state.lock`, a lock file controlled by Detox, that registers all in-use simulators.


By default, once all workers finish their test runs, Detox will delete the lock file. Under certain conditions, you may want to persist the lock file. Use the `--keepLockFile` flag to disable automatic deletion.
