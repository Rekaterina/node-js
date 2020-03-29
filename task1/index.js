const { pipeline } = require('stream');
const colors = require('colors');
const readStream = require('./streams/readStream');
const writeStream = require('./streams/writeStream');
const transformStream = require('./streams/transformStream');
const { inputPath, outputPath } = require('./parse');

pipeline(
  readStream(inputPath),
  transformStream,
  writeStream(outputPath),
  (err) => {
    if (err) {
      console.error('Text encoding/decoding is failed.', err);
    } else {
      console.log('Text encoding/decoding is succeeded.'.bgGreen);
    }
  }
);