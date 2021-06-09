/**
 * @param {number} n
 * @return {number[]}
 */

const countSetBits = (n) => {
  let ans = 0;
  while (n) {
    n = n & (n - 1);
    ans++;
  }
  return ans;
};

var countBits = function (n) {
  const ans = new Array();
  for (let i = 0; i <= n; i++) {
    ans.push(countSetBits(i));
  }
  return ans;
};
