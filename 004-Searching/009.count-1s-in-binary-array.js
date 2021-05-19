/**
 * @param {number[]} arr
 * @param {number} N
 * @returns {number}
 */

class Solution {
  firstIndex(arr, x) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (arr[mid] === x) {
        if (arr[mid - 1] === x && mid >= 1) {
          end = mid - 1;
        } else {
          return mid;
        }
      } else if (x > arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return -1;
  }
  lastIndex(arr, x) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (arr[mid] === x) {
        if (arr[mid + 1] === x && mid <= end) {
          start = mid + 1;
        } else {
          return mid;
        }
      } else if (x > arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return -1;
  }
  countOnes(arr, N) {
    //your code here
    if (arr[0] == 0) return 0;
    return this.lastIndex(arr, 1) - this.firstIndex(arr, 1) + 1;
  }
}
