#!/bin/bash

DATE=`date '+%Y-%m-%d_%H-%M-%S'`

pack() {
  local BASE_NAME=$1
  local ARTIFACTS_DIR=$2
  local CONTEXT=$3

  if [ $CI ]; then
generate_allure_report() {
  local ROOT_DIR=$1

  cd $ROOT_DIR
  [ -d "allure-results" ] && allure generate || echo "No allure-results found."
  cd -
}

cd "$(dirname "$0")/.."
generate_allure_report detox
generate_allure_report detox/test
pack artifacts "detox/test/artifacts" "detoxtest"
pack artifacts "examples/demo-react-native/artifacts" "rnexample"
pack artifacts "examples/demo-react-native-jest/artifacts" "rnexamplejest"
pack allure "detox/test/allure-report" "allure-e2e"
pack allure "detox/allure-report" "allure-unit"
