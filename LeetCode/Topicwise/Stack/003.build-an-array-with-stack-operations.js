/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  const ans = [];
  let j = 0;
  for (let i = 1; i <= n; i++) {
    if (i === target[j]) {
      j++;
      ans.push('Push');
      if (j >= target.length) break;
    } else {
      ans.push('Push');
      ans.push('Pop');
    }
  }
  return ans;
};
