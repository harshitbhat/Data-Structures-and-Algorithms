/**
 * @param {number[]} a
 * @param {number} n
 * @returns {number[]}
 */

class Solution {
  duplicates(a, n) {
    const ans = {};
    for (const el of a) {
      if (ans[el]) {
        ans[el]++;
      } else {
        ans[el] = 1;
      }
    }
    for (const key of Object.keys(ans)) {
      if (ans[key] === 1) {
        delete ans[key];
      }
    }
    return Object.keys(ans);
  }
}
