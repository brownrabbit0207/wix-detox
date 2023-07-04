#!/bin/bash -e

UPLOAD_ARTIFACT="$(pwd)/scripts/upload_artifact.sh"
trap "$UPLOAD_ARTIFACT" EXIT

# Approve unapproved SDK licenses
yes | $ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager --licenses

SCRIPTS_PATH="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"

source $SCRIPTS_PATH/demo-projects.sh

pushd detox
run_f "npm run build:android"
popd

pushd examples/demo-react-native
  run_f "npm run build:android-debug"
  run_f "npm run test:android-debug"

pushd examples/demo-pure-native-android
  export ANDROID_SERIAL=`adb devices | grep emulator | head -1 | awk '{print $1}'`
  run_f "./gradlew connectAndroidTest"
popd
