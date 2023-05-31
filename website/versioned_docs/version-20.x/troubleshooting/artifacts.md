# Artifacts

## Video Recording Issues on CI

For iOS, you might be getting errors on CI similar to this:

```plain text
Error: Error Domain=NSPOSIXErrorDomain Code=22 "Invalid argument" UserInfo={NSLocalizedDescription=Video recording requires hardware Metal capability.}.
```

Unfortunately, this error is beyond our reach. To fix it, you have to enable hardware acceleration on your build machine, or just disable video recording on CI if it is not possible to turn on the acceleration.

There might be a similar issue on Android when the screen recording process exits with an error on CI. While the solution might be identical to the one above, also you might try to experiment with other emulator devices and Android OS versions to see if it helps.

## Detox Instruments is Installed in a Custom Location
