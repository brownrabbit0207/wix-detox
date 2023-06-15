#!/bin/bash -ex

UPLOAD_ARTIFACT="$(pwd)/scripts/upload_artifact.sh"
trap "$UPLOAD_ARTIFACT" EXIT

# Approve unapproved SDK licenses
yes | $ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager --licenses

currentRnVersion=$(echo "${REACT_NATIVE_VERSION}" | cut -d "." -f2);
if [[ $currentRnVersion -ge 68 ]]; then
  source $(dirname "$0")/ci.sh
else
  echo 'Warning: Setting "skip" over invoke-code auto-generation because the react-native is lower than 68 and therefore contains patches (see detox/test/postinstall.js)'
  source $(dirname "$0")/ci.sh 'noGenerate'
fi

pushd detox/test
run_f "npm run integration"
popd


# run_f "npm run verify-artifacts:android"
popd
