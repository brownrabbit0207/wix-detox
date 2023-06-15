#!/bin/bash -e

if [[ "$1" == 'start' ]];then
  if [[ $(echo $BUILDKITE_MESSAGE | tr '[:upper:]' '[:lower:]') =~ ^release$ ]];then
    cat .buildkite/pipeline.release.yml
  elif [[ $(echo $BUILDKITE_MESSAGE | tr '[:upper:]' '[:lower:]') =~ ^debug$ ]];then
    cat .buildkite/pipeline.debug.yml
  else
    .buildkite/pipeline_common.sh
  fi

elif [[ "$1" == 'release' ]];then
  FAST_RELEASE=$(buildkite-agent meta-data get fast-release)
  if [[ "$FAST_RELEASE" == 'true' ]];then
    cat .buildkite/pipeline.release.fast.yml
  else
    .buildkite/pipeline_common.sh
    cat .buildkite/pipeline.release.fast.yml
  fi

