# detox reset-lock-file

```bash
detox reset-lock-file
```

However, when you want to run multiple `detox test` commands in parallel, you might want to disable the automatic
deletion via [`--keepLockFile`](test.md) CLI argument or [`behavior.init.keepLockFile`](../config/behavior.mdx#behaviorinitkeeplockfile-boolean)
property in the config file and reset the lock files explicitly, e.g.:

```bash
detox reset-lock-file & \
detox test -c iphone.release --keepLockFile & \
detox test -c ipad.release --keepLockFile & \
detox test -c android.phone.release --keepLockFile & \
detox test -c android.tablet.release --keepLockFile & \
wait;
```
