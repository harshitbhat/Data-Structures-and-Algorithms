/**
 * @param {Number} n
 * @returns {boolean}
 */

class Solution {
  // Function to check if given number n is a power of two.
  isPowerofTwo(n) {
    // code here
    if (n === 0) return false;
    return (n & (n - 1)) === 0;
  }
}
