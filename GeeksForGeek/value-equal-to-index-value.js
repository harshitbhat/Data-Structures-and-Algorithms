/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
 */

class Solution {
  valueEqualToIndex(arr, n) {
    const ans = [];
    for (let i = 0; i < n; i++) {
      if (arr[i] === i - 1) {
        ans.push(arr[i]);
      }
    }
    return ans;
  }
}
