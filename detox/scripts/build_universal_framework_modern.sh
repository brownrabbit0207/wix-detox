#!/bin/bash -e

PROJECT=$1
OUTPUT_DIR=$2
CONFIGURATION=Release
PROJECT_NAME=Detox

# Make sure the output directory exists

mkdir -p "${OUTPUT_DIR}"
echo ${BUILD_SIM}

xcodebuild -project "${PROJECT}" -scheme "Detox" -UseNewBuildSystem=${USE_NEW_BUILD_SYSTEM} -configuration "${CONFIGURATION}" -sdk iphonesimulator -destination "generic/platform=iOS Simulator" build -quiet

# Step 2. Copy the framework to output folder

cp -fR "${BUILD_SIM}/${PROJECT_NAME}.framework" "${OUTPUT_DIR}"/