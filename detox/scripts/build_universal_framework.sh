#!/bin/bash -e

SCRIPTPATH="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"

XCODEVERSION=$(xcodebuild -version | grep -oEi "([0-9]*(\.[0-9]*)+)")
fi

"${SCRIPTPATH}/${FRAMEWORK_SCRIPT}" "$@"