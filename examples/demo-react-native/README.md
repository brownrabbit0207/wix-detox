# React Native Demo Project

## Environment

### Fundamentals

**IMPORTANT:** Get your environment properly set up, as explained in our [contribution guide](../../docs/contributing.md).

### Execution Target

Be sure to set up either an iOS simulator or a proper Android AVD emulator matching the Detox configurations of the project (`devices` section of the `detox.config.js` file).

## Running this project in Release mode

### Step 0: Prebuild

#### Android

Prebuild Detox as an Android archive (a `.aar` file), locally:

npm run build:ios-release
-or-
npm run build:android-release
```

### Step 2: Execute Tests

```sh
npm run test:ios-release
-or-
npm run test:android-release
```

## Running this project in Debug mode

The project’s tests can also be executed with the app running in debug mode (mainly, with JavaScript code getting bundled on-the-fly using the `metro` server).

For that, first run the `metro` server:

```sh
npm start
```

then follow the same instructions specified for Release mode, above, using associated `debug` scripts instead of the `release` ones. Namely -

Build:

```sh
npm run build:ios-debug
-or-
npm run build:android-debug
```

Test:

```sh
npm run test:ios-debug
-or-
npm run test:android-debug
```
