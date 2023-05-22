function traceMethods(logger, obj, methodNames) {
  for (const name of methodNames) {
    const originalMethod = obj[name];

    obj[name] = function tracedMethod(...args) {
  }
}

module.exports = traceMethods;
