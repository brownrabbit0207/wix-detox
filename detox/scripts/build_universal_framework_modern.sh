#!/bin/bash -e

PROJECT=$1
OUTPUT_DIR=$2
CONFIGURATION=Release
PROJECT_NAME=Detox

# Make sure the output directory exists

mkdir -p "${OUTPUT_DIR}"
rm -fr "${OUTPUT_DIR}/${PROJECT_NAME}.framework"

# Step 0. Xcode version

USE_NEW_BUILD_SYSTEM="YES"
