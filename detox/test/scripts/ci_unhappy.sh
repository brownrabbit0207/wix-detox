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

echo "Running e2e test for timeout handling..."
export DETOX_LOGLEVEL=trace
export DETOX_JEST_SETUP_TIMEOUT=1000
node scripts/assert_timeout.js npm run "e2e:$platform" -- e2e-unhappy/env-setup-timeout.test.js
copy_coverage_to "../../coverage/e2e-$platform-timeout-ci.lcov"
unset DETOX_JEST_SETUP_TIMEOUT
unset DETOX_LOGLEVEL

echo "Running early syntax error test..."
node scripts/assert_timeout.js npm run "e2e:$platform" -- e2e-unhappy/early-syntax-error.test.js
fi
