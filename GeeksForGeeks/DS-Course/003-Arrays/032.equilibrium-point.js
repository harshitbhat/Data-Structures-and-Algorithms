/**
 * @param {number[]} a
 * @param {number} n
 * @returns {number}
 */

class Solution {
  // Function to find equilibrium point in the array.
  equilibriumPoint(a, n) {
    //your code here
    const prefixSum = new Array(n).fill(0);
    prefixSum[0] = a[0];
    for (let i = 1; i < n; i++) {
      prefixSum[i] += prefixSum[i - 1] + a[i];
    }
    let eqb = -1;
    if (n === 1) {
      return 1;
    }
    if (n == 2) {
      return -1;
    }
    for (let i = 1; i < n; i++) {
      if (prefixSum[i - 1] === prefixSum[n - 1] - prefixSum[i]) {
        return i + 1;
      }
    }
    return -1;
  }
}
