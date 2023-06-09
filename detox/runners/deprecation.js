const chalk = require('chalk');

// @ts-ignore
const bold = chalk.bold;

function getMaxWidth(text) {
  const lines = text.split('\n');
  return lines.reduce((acc, line) => Math.max(acc, line.length), 0);
}

function centerText(text, maxWidth = getMaxWidth(text)) {
  return text
    .split('\n')
    .map(line => {
      const padStart = Math.max(0, Math.floor((maxWidth - line.length) / 2));
      const padEnd = Math.max(0, maxWidth - line.length - padStart);
      return ' '.repeat(padStart) + line + ' '.repeat(padEnd);
    })
    .join('\n');
}

const header = `\
=========================  THE NEW JOURNEY BEGINS  =============================`;

console.error(centerText(`\
