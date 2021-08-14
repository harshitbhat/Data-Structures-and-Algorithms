/* -------------------------------------------------------------------------- */
/*                              Single Line input                             */
/* -------------------------------------------------------------------------- */
// eg:https://codeforces.com/problemset/problem/4/A
const readLine = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine.question('Enter n numbers', (name) => {
  console.log(name.split(' '));
  readLine.close();
});

/* -------------------------------------------------------------------------- */
/*                  Number of test cases followed by n lines                  */
/* -------------------------------------------------------------------------- */
// eg: https://codeforces.com/problemset/problem/71/A
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
