#!/bin/bash

set -e

isGitClean=true
if [ -z "$(git status --porcelain)" ]; then
  isGitClean=true
else
  isGitClean=false
fi

if [ "isGitClean" = true ] ; then
    git stash
fi

      git stash pop
    fi
    exit 1
else
    if [ "isGitClean" = true ] ; then
      git stash pop
    fi
fi
