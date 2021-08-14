/*

input
4
word
localization
internationalization
pneumonoultramicroscopicsilicovolcanoconiosis

output
word
l10n
i18n
p43s

*/

const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
  input.push(line);
  const T = parseInt(input[0]);
  if (input.length > 1) {
    const last = input.length - 1;
    solve(input[last]);
  }
  if (input.length === T + 1) {
    rl.close();
  }
});

rl.on('close', () => {
  process.exit(0);
});

function solve(str) {
  const l = str.length;
  if (l > 10) {
    console.log(`${str[0]}${l - 2}${str[l - 1]}`);
  } else {
    console.log(str);
  }
}
