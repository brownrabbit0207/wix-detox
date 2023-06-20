#!/usr/bin/env bash

source $(dirname "$0")/logger.sh
source $(dirname "$0")/install.sh

if [ -z "$REACT_NATIVE_VERSION" ]; then
  echo "Error: REACT_NATIVE_VERSION variable was not defined!"
  exit 1
fi

