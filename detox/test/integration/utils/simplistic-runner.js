const detox = require('detox/internals');
const log = detox.log.child({ cat: ['lifecycle'] });

async function main() {
  try {
    await detox.init();
    await test1();
    await test2();
  } finally {
    await detox.cleanup();
  }
}

async function test1() {
  log.info('Test 1');
  await device.launchApp();
}

async function test2() {
  log.info('Test 2');
