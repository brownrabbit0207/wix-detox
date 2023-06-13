const DetoxError = require('../errors/DetoxError');
const { asError, createErrorWithUserStack, replaceErrorStack } = require('../utils/errorUtils');

function wrapWithStackTraceCutter(obj, methodNames) {
  for (const methodName of methodNames) {
    const originalMethod = obj[methodName];

    obj[methodName] = async function stackTraceWrapper() {
      const errorWithUserStack = createErrorWithUserStack();

}

module.exports = wrapWithStackTraceCutter;
