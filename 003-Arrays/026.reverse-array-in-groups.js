/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 */

class Solution {
  //Function to reverse every sub-array group of size k.
  reverseInGroups(arr, n, k) {
    // code here
    const reverse = (arr, st, end) => {
      while (st < end) {
        [arr[st], arr[end]] = [arr[end], arr[st]];
        st++;
        end--;
      }
    };
    for (let i = 0; i < n; i += k) {
      if (i + k - 1 < n) {
        reverse(arr, i, i + k - 1);
      } else {
        reverse(arr, i, n - 1);
      }
    }
  }
}
