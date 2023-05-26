# Uninstalling Detox

Installing and using Detox implies certain side effects: cloned devices, cache files, state files, temporary files, etc.

This checklist might come in handy whenever you have to make a clean uninstallation after using Detox.

## Detox Framework Cache

Every install of Detox also triggers a `postinstall` script in its `package.json`, which builds (or unpacks) `Detox.framework` into `~/Library/Detox`.

You can either delete the folder manually:

```bash
rm -rf ~/Library/Detox
```

or run:

```bash
detox clean-framework-cache
```

## Test Session State

On every test run, Detox rewrites a few temporary files in `DETOX_LIBRARY_ROOT_PATH`, i.e.:

```bash
xcrun simctl delete <uuid>
```

## Remnants of Artifacts

Forced exits may result in leaving some temporary files behind.

### iOS

To ensure there are no temporary artifact files (logs, screenshots, etc.), you can run:

```bash
rm -rf $TMPDIR/*.detox.*
```

If you wish to clean up your iOS simulators from the installed apps and other customizations, just run the erase procedure for the relevant ones:

```bash
xcrun simctl erase <uuid>
```

### Android

The advice for iOS applies to the Android virtual devices as well. To wipe user files on a specific AVD, run:

```bash
emulator -avd <your_AVD> -wipe-data
```

If you have to clean temporary Detox files from an individual booted device, look out for files like `11159175_0.log` in `/sdcard` folder.
You can try deleting them using a simple wildcard like below or use your own:

```bash
adb -s <emulator-port> shell rm -rf /sdcard/*_*.*
```

## Detox CLI

If you have installed the official CLI wrapper for Detox, then make sure to uninstall it as well:

```bash npm2yarn
npm uninstall detox-cli --global
```
