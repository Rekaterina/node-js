const { program } = require('commander');
const path = require('path');
const colors = require('colors');

program
  .storeOptionsAsProperties(false)
  .option('-s, --shift [shift]', 'shift size')
  .option('-i, --input [input file]', 'input file')
  .option('-o, --output [output file]', 'output file')
  .option('-a, --action [action type]', 'action encode / decode')

program.parse(process.argv);
const options = program.opts();

process.on('exit', (code) => {
  if (code !== 0) {
    process.stdout.write(` Process exited with code: ${code}`.red);
  }
});

if (typeof(options.shift) == 'undefined') {
  process.stderr.write('Shift is required argument'.bgRed);
  process.exit(1);
} else if (!options.shift || !Number.isInteger(Number(options.shift))) {
  process.stderr.write('Shift argument should be integer positive number'.bgRed);
  process.exit(1);
}

if (typeof(options.action) == 'undefined') {
  process.stderr.write('Action is required argument'.bgRed);
  process.exit(1);
}

let inputPath;
let outputPath;

if (options.input) {
  inputPath = path.join(__dirname, options.input);
} else {
  inputPath = options.input;
}

if (options.output) {
  outputPath = path.join(__dirname, options.output);
} else {
  outputPath = options.output;
}

module.exports = {
  inputPath,
  outputPath,
  options
};
