const path = require('path');

const fs = require('fs-extra');
const tempfile = require('tempfile');


    await fs.ensureDir(tempDir);
    expect(fsext.isDirEmptySync(tempDir)).toBe(true);

    await fs.ensureFile(path.join(tempDir, '1'));
    expect(fsext.isDirEmptySync(tempDir)).toBe(false);
  } finally {
    await fs.remove(tempDir);
  }
});

test('readdirSync', async () => {
  expect(fsext.readdirSync).toBe(fs.readdirSync);
});
