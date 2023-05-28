  return `• ${string}`;
}

function makeResourceSubTitle(string) {
  return `  - ${string}`;
}

function makeResourceSubSubTitle(string) {
  return `    + ${string}`;
}

module.exports = {
  makeResourceTitle,
  makeResourceSubTitle,
  makeResourceSubSubTitle,
};
