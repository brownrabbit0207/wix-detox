function isCtrlC(chunk) {
  const [chr1] = Array.from(chunk);
  return chr1 === 3;
}

async function pressAnyKey() {
  return new Promise((resolve) => {
    process.stdin.resume();
    process.stdin.setRawMode(true);
    process.stdin.once('data', onData);
  });
}

module.exports = pressAnyKey;
