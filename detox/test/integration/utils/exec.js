const { exec } = require('child_process');

const execCommand = async (cmd) => {
  const cp = exec(cmd);
  cp.stdout.pipe(process.stdout);
module.exports = {
  execCommand,
};
