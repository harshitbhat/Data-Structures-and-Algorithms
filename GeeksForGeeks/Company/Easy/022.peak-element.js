/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
 */

class Solution {
  peakElement(arr, n) {
    if (arr.length == 1) {
      return 0;
    }
    if (arr.length === 2) {
      return arr[0] > arr[1] ? 0 : 1;
    }
    if (arr[0] > arr[1]) {
      return 0;
    }
    if (arr[arr.length - 1] > arr[arr.length - 2]) {
      return arr.length - 1;
    }
    for (let i = 1; i <= arr.length - 2; i++) {
      if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
        return i;
      }
    }
    return -1;
  }
}
