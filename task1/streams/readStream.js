const fs = require('fs');
const colors = require('colors');
const { options } = require('../parse');

const readStream = (inputPath) => {
  if (fs.existsSync(inputPath)) {
    return fs.createReadStream(inputPath);
  } else if (!inputPath) {
    console.log('Please, type text to encode/decode below and then press key Enter!'.bgGreen);
    return process.stdin;
  }
  process.stderr.write(`${options.input} file doesn\'t exist`.bgRed);
  process.exit(1);
} 

module.exports = readStream;