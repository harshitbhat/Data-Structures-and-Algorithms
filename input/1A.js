const readLine = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine.question('', (line) => {
  line = line.split(' ');

  const n = parseInt(line[0]);
  const m = parseInt(line[1]);
  const a = parseInt(line[2]);

  solve(n, m, a);
  readLine.close();
});

function solve(n, m, a) {
  let ans = 0;

  ans = n % a === 0 ? Math.floor(n / a) : Math.floor(n / a) + 1;
  ans *= m % a === 0 ? Math.floor(m / a) : Math.floor(m / a) + 1;

  console.log(ans);
}
