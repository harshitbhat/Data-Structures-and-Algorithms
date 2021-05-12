/*

log(n!) = log(1) + log(2) + log(3) + ... + log(n)

*/

const digitsInFactorial = (n) => {
  if (n <= 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  let digs = 0;
  for (let i = 2; i <= n; i++) {
    digs += Math.floor(Math.log10(i));
  }
  return Math.floor(digs) + 1;
};
