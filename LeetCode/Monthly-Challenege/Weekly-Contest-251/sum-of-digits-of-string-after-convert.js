/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

const sumOfDigits = (n) => {
  let sum = 0;
  while (n) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
};

var getLucky = function (s, k) {
  const aplhabets = '_abcdefghijklmnopqrstuvwxyz';
  let num = '';
  s = s.toLowerCase();
  for (const ch of s) {
    num += aplhabets.indexOf(ch);
  }
  let ans = 0;
  for (const ch of num) {
    ans += parseInt(ch);
  }
  for (let i = 1; i < k; i++) {
    ans = sumOfDigits(ans);
  }
  return ans;
};

console.log(getLucky('zbax', 2));
