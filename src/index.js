'use strict';
const readLine = require('readline');

const args = require('minimist')(process.argv.slice(2), {
  string: ['theme']
});

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Who is the author ? ', function(name) {
  console.log(`The author is ${name`);
  rl.close();
});

rl.on('close', function() {
  console.log('\nBYE BYE !!!');
  process.exit(0);
});
