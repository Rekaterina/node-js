const fs = require('fs');
const colors = require('colors');
const { options } = require('../parse');

const writeStream = (outputPath) => {
  if (fs.existsSync(outputPath)) {
    return fs.createWriteStream(outputPath, { flags: 'a' });
  } else if (!outputPath) {
    return process.stdout;
  }
  process.stderr.write(`${options.output} file doesn\'t exist`.bgRed);
  process.exit(1);
}

module.exports = writeStream;