/*
input
8
output
YES
*/

const readLine = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine.question('', (n) => {
  n = parseInt(n);
  solve(n);
  readLine.close();
});

function solve(n) {
  if (n !== 2 && n % 2 === 0) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}
