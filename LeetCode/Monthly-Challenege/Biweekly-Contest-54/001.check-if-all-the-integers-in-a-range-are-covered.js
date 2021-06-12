/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
  const arr = new Array(100).fill(false);
  for (const range of ranges) {
    for (let i = range[0]; i <= range[1]; i++) {
      arr[i] = true;
    }
  }
  let ans = true;
  for (let i = left; i <= right; i++) {
    if (arr[i] === false) {
      ans = false;
      break;
    }
  }
  return ans;
};
