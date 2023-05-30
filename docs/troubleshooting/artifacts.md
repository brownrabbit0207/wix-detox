# Artifacts

## Video Recording Issues on CI

For iOS, you might be getting errors on CI similar to this:

```plain text
Error: Error Domain=NSPOSIXErrorDomain Code=22 "Invalid argument" UserInfo={NSLocalizedDescription=Video recording requires hardware Metal capability.}.
```


> **Note:** If **Detox Instruments** had been [integrated into your project](https://github.com/wix/DetoxInstruments/blob/master/Documentation/XcodeIntegrationGuide.md), then the integrated [Detox Profiler framework](https://github.com/wix/DetoxInstruments/tree/master/Profiler) will be used when profiling with Detox.

## `Ctrl+C` Does Not Clean Up Temporary Files

This is a known issue. :man\_shrugging:
After you press `Ctrl+C` and stop the tests, some of temporary files won’t get erased (e.g. `/sdcard/83541_0.mp4` on Android emulator, or `/private/var/folders/lm/thz8hdxs4v3fppjh0fjc2twhfl_3x2/T/f12a4fcb-0d1f-4d98-866c-e7cea4942ade.png` on your Mac).
It cannot be solved on behalf of Detox itself, because the problem has to do with how Jest runner terminates its puppet processes.
The issue is on our radar, but the ETA for the fix stays unknown.
If you feel able to contribute the fix to [Jest](https://github.com/facebook/jest), you are very welcome.
