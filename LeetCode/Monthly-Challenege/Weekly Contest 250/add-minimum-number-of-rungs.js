/**
 * @param {number[]} rungs
 * @param {number} dist
 * @return {number}
 */
var addRungs = function (rungs, dist) {
  let init = 0;
  let ans = 0;
  for (const rug of rungs) {
    const diff = rug - init;
    if (diff > dist) {
      if (diff % dist === 0) {
        ans += Math.floor(diff / dist) - 1;
      } else {
        ans += Math.floor(diff / dist);
      }
    }
    init = rug;
  }
  return ans;
};
