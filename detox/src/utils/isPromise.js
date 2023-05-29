function isPromise(value) {
  return Promise.resolve(value) === value;
}

function isPromiseLike(value) {
};
