---
id: how-detox-works
slug: introduction/how-detox-works
title: How Detox Works
sidebar_label: How Detox Works
---

## How Detox Works

Detox is an end-to-end testing framework. This means it runs your app on an actual device/simulator and interacts with it just like a real user would. This type of testing can give a lot of confidence in your app and help automate a manual QA process.

When a Detox test executes, you actually have two different parts running side by side:

- **The mobile app itself**, usually running on a simulator/emulator. A regular native build of your app is installed and executed on the device. Your app is usually built once before the tests start running.

- Keeping track of all network requests that are currently in-flight and waiting until they complete
- Keeping track of pending animations and waiting until they complete
- Keeping track of timers and waiting until they expire or are cancelled
- Keeping track of the React Native operations

### Architecture

Detox comprises the following components:

- [**Tester**](https://github.com/wix/Detox/tree/master/detox/src): The testing component, running in a Node.js process on the host computer, executing the test logic. The tester is also responsible for device management and artifact collection.
- **Detox native client ([iOS](https://github.com/wix/Detox/tree/master/detox/ios) & [Android](https://github.com/wix/Detox/tree/master/detox/android)):** A component that gets seamlessly integrated into the tested app on the tested device, right as Detox starts executing. It synchronizes with the app, matches user queries, executes user commands (e.g. taps, scrolls) and validates expectations.
- **[Detox mediator server](https://github.com/wix/Detox/tree/master/detox/src/server)**: A small web socket server, running in a Node.js process on the host computer, used to connect between the tester and the client. Normally, the tester starts a server on a randomized session id and an available port, and sends the session and port to the client app as a launch argument.
