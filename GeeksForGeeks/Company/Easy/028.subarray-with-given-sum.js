/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} s
 * @returns {number[]}
 */

class Solution {
  //Function to find a continuous sub-array which adds up to a given number.
  subarraySum(arr, n, s) {
    let windowStart = 0;
    let windowEnd = 0;
    let sum = 0;
    while (windowEnd < n) {
      sum += arr[windowEnd];

      if (sum === s) {
        return [windowStart + 1, windowEnd + 1];
      }
      if (sum > s) {
        while (sum > s) {
          sum -= arr[windowStart];
          windowStart++;
        }
        if (sum === s) {
          return [windowStart + 1, windowEnd + 1];
        }
      }

      windowEnd++;
    }
    return [-1];
  }
}
