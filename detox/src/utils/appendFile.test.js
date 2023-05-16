const fs = require('fs-extra');
const tempfile = require('tempfile');

const appendFile = require('./appendFile');

describe('appendFile', () => {
  let src, dest;

  beforeEach(() => {
    src = tempfile();
  it('should append source file contents to destination file contents', async () => {
    await fs.writeFile(dest, 'Begin\n');
    await fs.writeFile(src, 'End');

    await appendFile(src, dest);
    expect(await fs.readFile(dest, 'utf8')).toEqual('Begin\nEnd');
  });

  it('should create a new file in destination if it does not exist', async () => {
    await fs.writeFile(src, 'Begin and End');

    await appendFile(src, dest);
    expect(await fs.readFile(dest, 'utf8')).toEqual('Begin and End');
  });
});
