const stream = require('stream');
const cipher = require('../cipher');

class TransformStream extends stream.Transform {
  _transform(data, encoding, callback) {
    this.push(cipher(data));
    callback();
  }
}

const transformStream = new TransformStream();

module.exports = transformStream;