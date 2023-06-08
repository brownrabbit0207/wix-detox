# Using Launch Arguments

<!-- markdownlint-configure-file { "header-increment": 0 } -->

In Detox, the app under test is launched via an explicit call to [`device.launchApp()`](../api/device.md). Through various means, Detox enables specifying a set of user-defined arguments (key-value pairs) to be passed on to the app when launched, so as to make them available inside the launched app itself at runtime (both on the native side, and - if applicable, on the JavaScript side).

### Motivation

> If this is clear to you first hand, you can skip right to the section about arguments setup.

In particular, the common use case of using launch argument (although not distinctly), is for [mocking](mocking.md) external entities such as servers - replacing them with equivalent _mock servers_, sporting equivalent (yet fake) API-endpoints that run alongside the testing host (i.e. the one running Detox). These mock servers can typically be configured during the test, to return deterministic responses to network requests coming from the app.

Typically, the process of setting up such servers - especially in a parallel test-execution environment, involves three major steps (within the context of a test set-up):

1. Allocating a port for a mock server, dynamically.
1. Bringing up a mock server instance bound to that port (e.g. at `localhost:1234`).
1. Launching the app with a predefined argument that holds the port, for example `mockServerPort=1234`.
   (It is assumed here that there’s designated mocked code inside the app that can read `mockServerPort` and rewire all connections to `localhost:1234` instead of to the real production server).

In this context, launch argument are useful for implementing step [#3](https://github.com/wix/Detox/issues/3).
On iOS, the specified launch arguments are passed as the process launch arguments and available through normal means.

On Android, the launch arguments are set as bundle-extra’s into the activity’s intent. It will therefore be accessible on the native side via the current activity as: `currentActivity.getIntent().getBundleExtra("launchArgs")`.

Further, handling of these launch arguments is up to the user’s responsibility and is out of scope for Detox.
