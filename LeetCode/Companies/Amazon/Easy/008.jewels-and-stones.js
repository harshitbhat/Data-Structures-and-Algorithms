/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let ans = 0;
  for (let char of jewels) {
    ans += stones.split('').filter((ch) => ch === char).length;
  }
  return ans;
};
