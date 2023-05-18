const sanitize = require('sanitize-filename');

const DetoxRuntimeError = require('../errors/DetoxRuntimeError');
const MAX_FILE_LENGTH = 255;

const sanitizeOptions = {
  replacement: '_',
};

/*
  Escape filename and trim it to match filesystem limits (usually, not longer than 255 chars)
 */
function constructSafeFilename(prefix = '', trimmable = '', suffix = '') {
  if (!trimmable) {
    throw new DetoxRuntimeError({
      message: 'no trimmable filename was given to constructSafeFilename(prefix, trimmable, suffix)',
      debugInfo: 'the arguments were: ' + JSON.stringify({
        prefix,
        trimmable,
        suffix,
  const trimmed = trimmable.slice(-MAX_FILE_LENGTH + nonTrimmableLength);
  const unsafe = prefix + trimmed + suffix;
  const sanitized = sanitize(unsafe, sanitizeOptions);

  return sanitized;
}

module.exports = constructSafeFilename;
