const { options } = require('./parse');

const cipher = (data) => {
  if (options.action === 'encode' || options.action === 'decode') {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphLength = alphabet.length;
    const shift = Number(options.shift);
    let result = '';
    data = data.toString();

    for (let i = 0; i < data.length; i += 1) {
      let charIndex = alphabet.indexOf(data[i].toLowerCase());
      if (charIndex !== -1) {
        let newCharIndex = options.action === 'encode' ? (charIndex + shift) % alphLength : ((charIndex + alphLength - (shift % alphLength)) % alphLength);
        result = (data[i].toLowerCase() === data[i]) ? result + alphabet[newCharIndex] : result + (alphabet[newCharIndex]).toUpperCase();
      } else {
        result = result + data[i];
      }
    }
    return result;
  }

  process.stderr.write('Action argument should be decode/encode'.bgRed);
  process.exit(1);
};

module.exports = cipher;