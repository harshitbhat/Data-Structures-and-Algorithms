/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @returns {number[]}
 */

class Solution {
  countDistinct(arr, n, k) {
    const hash = new Map();
    const ans = [];
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < n; windowEnd++) {
      const val = hash.get(arr[windowEnd]);
      if (val) {
        hash.set(arr[windowEnd], val + 1);
      } else {
        hash.set(arr[windowEnd], 1);
      }

      if (windowEnd >= k - 1) {
        ans.push(hash.size);
        const val2 = hash.get(arr[windowStart]);
        hash.set(arr[windowStart], val2 - 1);
        if (hash.get(arr[windowStart]) === 0) {
          delete hash.delete(arr[windowStart]);
        }
        windowStart++;
      }
    }
    return ans;
  }
}
