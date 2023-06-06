const path = require('path');

const fs = require('fs-extra');
const tempfile = require('tempfile');

const fsext = require('./fsext');

test('isDirEmptySync', async () => {
  const tempDir = tempfile();
  try {

test('readdirSync', async () => {
  expect(fsext.readdirSync).toBe(fs.readdirSync);
});
