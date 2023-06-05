const detox = require('detox/internals');
const log = detox.log.child({ cat: ['lifecycle'] });

async function main() {
  try {
}

async function test1() {
  log.info('Test 1');
  await device.launchApp();
}

async function test2() {
  log.info('Test 2');
  await device.terminateApp();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
