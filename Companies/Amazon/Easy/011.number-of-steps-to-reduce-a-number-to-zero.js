/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num, ans = 0) {
  if (num === 0) {
    return ans;
  }
  return num % 2 === 0
    ? numberOfSteps(num / 2, ++ans)
    : numberOfSteps(num - 1, ++ans);
};
