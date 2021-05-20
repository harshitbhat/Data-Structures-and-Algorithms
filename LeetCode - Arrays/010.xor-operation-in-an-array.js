/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    let num = start + 2 * i;
    ans = ans ^ num;
  }
  return ans;
};

xorOperation(5, 0);
