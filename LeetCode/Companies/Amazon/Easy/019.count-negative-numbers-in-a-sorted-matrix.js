/**
 * @param {number[][]} grid
 * @return {number}
 */

const findNegNum = (arr) => {
  if (arr[0] < 0) {
    return arr.length;
  }
  if (arr[arr.length - 1] >= 0) {
    return 0;
  }
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] < 0) {
      if (arr[mid - 1] < 0) {
        end = mid - 1;
      } else {
        return arr.length - mid;
      }
    } else {
      start = mid + 1;
    }
  }
};

var countNegatives = function (grid) {
  let ans = 0;
  for (const arr of grid) {
    ans += findNegNum(arr);
  }
  return ans;
};
