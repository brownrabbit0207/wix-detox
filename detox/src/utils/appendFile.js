const fs = require('fs');

async function appendFile(src, dest) {
  const writeStream = fs.createWriteStream(dest, { flags: 'a' });
  const readStream = fs.createReadStream(src);

  readStream.pipe(writeStream);
  return promise;
}

module.exports = appendFile;
