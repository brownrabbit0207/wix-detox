---
id: ios-dev-env
slug: introduction/ios-dev-env
title: Setting Up an iOS Development & Testing Environment
sidebar_label: Setting Up an iOS Development & Testing Environment
---

## Setting Up an iOS Development & Testing Environment

This guide sums up the tools required for an environment for running automated UI tests using iOS simulators (using Detox, in particular).

#### Install the Latest Version of [Homebrew](http://brew.sh)

Homebrew is a package manager for macOS, used to install other command line tools.

To ensure everything needed for Homebrew tool installation is installed, run

```sh
xcode-select --install
```

#### Install [`applesimutils`](https://github.com/wix/AppleSimulatorUtils)

A collection of utils for Apple simulators, Detox uses it to query and communicate with the simulator.

```sh
brew tap wix/brew
brew install applesimutils
```

> **Note:** Make sure to periodically update your version of `applesimutils` to the latest version.
