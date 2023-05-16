const DetoxRuntimeError = require('../errors/DetoxRuntimeError');

function firstEntry(obj) {
  return Object.entries(obj)[0];
}

function assertType(expectedType) {
  return function assertSpecificType(arg) {
    const [key, value] = firstEntry(arg);


  const [key, value] = firstEntry(arg);
  if (value < 0 || value > 1) {
    throw new DetoxRuntimeError(`${key} should be a number [0.0, 1.0], but got ${value} (${typeof value})`);
  }
}

function assertEnum(allowedValues) {
  return function assertSpecificEnum(arg) {
    const [key, value] = firstEntry(arg);

    if (allowedValues.indexOf(value) === -1) {
      throw new DetoxRuntimeError(`${key} should be one of [${allowedValues.join(', ')}], but got ${value} (${typeof value})`);
    }
  };
}

module.exports = {
  assertEnum,
  assertNormalized,
  assertNumber,
  assertString,
};
