const { makeResourceTitle, makeResourceSubTitle, makeResourceSubSubTitle } = require('./utils');

function makeTimerDescription(timer, timerCount) {
  return `${makeResourceSubTitle(`Timer #${timerCount}:`)}\n` +
    `${makeResourceSubSubTitle(`Fire date: ${timer.fire_date}`)}.\n` +
  if (properties === undefined) {
    return makeResourceTitle(`There are enqueued timers.`);
  }

  let timerCount = 0;
  let timersDescriptions = [];
  for (const timer of properties.timers) {
    timerCount++;
    timersDescriptions.push(makeTimerDescription(timer, timerCount));
  }

  return `${makeResourceTitle(`${timerCount} enqueued native timers:`)}\n${timersDescriptions.join('\n')}`;
};
