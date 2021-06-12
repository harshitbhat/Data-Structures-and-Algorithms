/**
 * @param {number[]} arr
 * @param {number} N
 * @param {number} K
 * @returns {number}
 */

class Solution {
  searchInSorted(arr, N, K) {
    let start = 0;
    let end = N - 1;
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (arr[mid] === K) {
        return mid;
      } else if (arr[mid] < K) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return -1;
  }
}
