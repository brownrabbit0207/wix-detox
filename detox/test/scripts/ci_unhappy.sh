#!/usr/bin/env bash

set -e

export DISABLE_JUNIT_REPORTER=1
export DETOX_RETRIES=0

platform=$1

copy_coverage_to() {
    if [ -n "$CI" ]; then
      cp coverage/lcov.info "$1"
    fi
}

then
    echo "Stack trace mangling for Client.js passed OK."
    copy_coverage_to "../../coverage/e2e-$platform-error-stack-client-js.lcov"
else
    echo "Stack trace mangling for Client.js test has failed"
    echo "$runnerOutput"
    exit 1
fi

echo "Running e2e stack trace mangling test (Device.js.js)..."
runnerOutput="$(npm run "e2e:$platform" -- e2e-unhappy/failing-device-method.test.js 2>&1 | tee /dev/stdout)"

if grep -q "await.*device.*selectApp" <<< "$runnerOutput" ;
then
    echo "Stack trace mangling for Device.js has passed OK."
    copy_coverage_to "../../coverage/e2e-$platform-error-stack-device-js.lcov"
else
    echo "Stack trace mangling for Device.js test has failed"
    echo "$runnerOutput"
    exit 1
fi
