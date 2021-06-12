/**
 * @param {number} N
 * @returns {number}
 */

class Solution {
  floorSqrt(x) {
    let start = 0;
    let end = x;
    let ans = -1;
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      const sqR = mid * mid;
      if (sqR === x) {
        return mid;
      } else if (sqR > x) {
        end = mid - 1;
      } else {
        start = mid + 1;
        ans = mid;
      }
    }
    return ans;
  }
}
