// @ts-nocheck
const { DetoxRuntimeError } = require('../../../../src/errors/DetoxRuntimeError');
const { filterErrorStack } = require('../../../../src/utils/errorUtils');

function findUserConstructor() {
  let wasInBaseClass = false;
  let wasInUserClass = false;

  return function (line) {
    if (!wasInBaseClass) {
      if (/^\s*at new DetoxCircusEnvironment/.test(line)) {
        wasInBaseClass = true;
      }

      return false;
    }

    if (!wasInUserClass && /^\s*at new/.test(line)) {
      wasInUserClass = true;
    }

    return wasInUserClass;
  };
}

