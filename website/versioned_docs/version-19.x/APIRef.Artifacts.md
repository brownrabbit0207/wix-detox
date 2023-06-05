---
id: artifacts
slug: api/artifacts
title: Artifacts
sidebar_label: Artifacts
### Enabling Artifacts

Artifacts are disabled by default. To enable them, specify via **launch arguments** or a **configuration** object what artifacts you want to record.

#### Launch Arguments

- To record `.log` files, add `--record-logs all` (or `--record-logs failing`, if you want to keep logs only for failing tests).
- To record `.mp4` test run videos, add `--record-videos all` (or `--record-videos failing`, if you want to keep video recordings only for failing tests).
- To record `.dtxrec` (Detox Instruments recordings) for each test, add `--record-performance all`. To open those recordings, you’ll need [Detox Instruments](https://github.com/wix/DetoxInstruments). **NOTE:** only iOS is supported.
- To capture `.uihierarchy` snapshots (**iOS only, Xcode 12.0+**) on view action failures, add `--capture-view-hierarchy enabled`.
- To take `.png` screenshots before and after each test, add `--take-screenshots all` (or `--take-screenshots failing`, if you want to keep only screenshots of failing tests).\
  Alternatively, you might leverage the [device.takeScreenshot()](APIRef.DeviceObjectAPI.md#devicetakescreenshotname) API for manual control.

##### Artifacts root directory

- To change artifacts root directory location (by default it is `./artifacts`), add `--artifacts-location <path>`.\
  **NOTE:** There is a slightly obscure convention. If you want to create automatically a subdirectory with timestamp and configuration name (to avoid file overwrites upon consequent reruns), specify a path to directory that does not end with a slash. Otherwise, if you want to put artifacts straight to the specified directory (in a case where you make a single run only, e.g. on CI), add a slash (or a backslash) to the end.

```sh
detox test --artifacts-location /tmp/detox_artifacts  # will also append /android.emu.release.2018-06-14 08:54:11Z
detox test --artifacts-location /tmp/detox_artifacts/ # won’t append anything, hereby treating it as a root
```

#### Configuration Object

Detox artifacts can be configured in a more advanced way with the `artifacts` configuration in `package.json` (or `.detoxrc`):

```json
{
  "artifacts": {},
  "configurations": {
    "some.device": {
      "artifacts": {},
    },
  },
}
```

**NOTE:** As you can see, there is a global and a local (per-configuration) configuration of the artifacts.
Detox merges those configurations, and the per-device artifacts configuration has a higher priority over the general one.

The `artifacts` object has the following properties:

| Property    | Example values                  | Default value | Description                                                                                                                                                          |
| ----------- | ------------------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| rootDir     | `".artifacts/"`                 | `./artifacts` | A directory, where all the recorded artifacts will be placed in. Please note that there is a trailing slash convention [described above](#artifacts-root-directory). |
| pathBuilder | `"./e2e/config/pathbuilder.js"` | `undefined`   | Path to a module that exports a custom `PathBuilder` [ᵃ](#path-builder)                                                                                              |
| plugins     | `{ ... }`                       | ... see below | ... see below                                                                                                                                                        |

##### Path builder

**ᵃ** `PathBuilder` should be either an _object_ with a method `buildPathForTestArtifact` or a _class_ — see the corresponding interfaces below:

```typescript
interface PathBuilder {
    buildPathForTestArtifact(artifactPath: string, testSummary?: TestSummary): string;
}

interface PathBuilderClass {
    new(opts: { rootDir: string; }): PathBuilder;
}
```

As one can see, if a custom implementation of `PathBuilder` exports a class instead of an object, then the class constructor can also get and save `rootDir` location:

```js
class MyPathBuilder {
  constructor({ rootDir }) {
    this._rootDir = rootDir;
  }

  buildPathForTestArtifact(artifactName, testSummary) {
    /* ... use this._rootDir ... */
  }
}

module.exports = MyPathBuilder;
```

Its main method, `buildPathForTestArtifact` should return a full path to the custom artifact location, when called with a suggested artifact name (e.g., `testDone.png`, `device.log`) and the current `TestSummary`, where `TestSummary` is:

```typescript
interface TestSummary {
    /**
     * Name of the current test, e.g., for:
     * describe('that screen', () =>
     *   it('should have a menu', () =>
     * The expected string would be: "should have a menu".
     */
    title: string;
    /**
     * Full name of the current test, usually preceded by a suite name, e.g.:
     * describe('that screen', () =>
     *   it('should have a menu', () =>
     * The expected string would be: "that screen should have a menu".
     */
    fullName: string;
    /**
     * Status of the current test. Free-form strings are not allowed.
     */
    status: 'running' | 'passed' | 'failed';
    /**
     * Clarifies the reason for why the test has failed.
     * Expected to coincide only with status: 'failed'.
     */
    timedOut?: boolean;
    /**
     * If the test runner is capable of retrying failed tests, then
     * this property indicates for which time this test is running.
     * When the property is undefined, its value is considered to be 1.
     * */
    invocations?: number;
}
```

For more technical details, search for `ArtifactPathBuilder.js` in Detox source code.

The further subsections describe the `plugins` object structure.

##### Screenshot Plugin

Below is a default screenshot plugin object configuration, which is loaded implicitly and corresponds to the `manual` preset:

```json
{
  "plugins": {
    "screenshot": {
      "enabled": true,
      "shouldTakeAutomaticSnapshots": false,
      "keepOnlyFailedTestsArtifacts": false,
      "takeWhen": {
        "testStart": true,
        "testDone": true,
        "appNotReady": true,
      },
    }
  }
}
```

The other string presets override the following properties compared to the default configuration:

- `none` => `{ enabled: false }`.
- `failing` => `{ shouldTakeAutomaticSnapshots: true, keepOnlyFailedTestsArtifacts: true }`.
- `all` => `{ shouldTakeAutomaticSnapshots: true, keepOnlyFailedTestsArtifacts: false }`

The individual property behavior is the following:

- If `enabled` is _false_, then the screenshots will never be saved to the artifacts' folder.
- If `shouldTakeAutomaticSnapshots` is _false_, then no one of the events described in `takeWhen` object is going to trigger a screenshot.
- If `keepOnlyFailedTestsArtifacts` is _true_, then only screenshots from a failed test will be saved to the artifacts folder.
- If `takeWhen` is _undefined_, it is going to have the default value described above (all props are true).
- If `takeWhen` is set to be an empty object `{}`, that is equivalent to:

```json
{
  "testStart": false,
  "testDone": false,
  "appNotReady": true,
}
```

Hence, for example, if you wish to enable only `testDone` screenshots and leave taking `appNotReady` screenshots as-is, you have to pass:

```json
{
  "artifacts": {
    "plugins": {
      "screenshot": {
        "takeWhen": { "testDone": true }
      }
    }
  }
}
```

##### Video Plugin

