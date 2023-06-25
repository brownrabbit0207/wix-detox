  return new Promise(resolve => {
    const handle = setTimeout(resolve, ms);
    if (shouldUnref) {
      handle.unref();
    }
  });
}

module.exports = sleep;
