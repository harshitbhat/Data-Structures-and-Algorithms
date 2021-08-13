/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
 */
class Solution {
  transitionPoint(arr, n) {
    if (arr[0] === 1) {
      return 0;
    }
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (arr[mid] === 1 && arr[mid - 1] !== 1) {
        return mid;
      } else if (arr[mid] === 0) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return -1;
  }
}
