const loggedErrors = new WeakSet();

function markErrorAsLogged(error) {
  loggedErrors.add(error);
  return error;
module.exports = {
  markErrorAsLogged,
  isErrorAlreadyLogged,
};
