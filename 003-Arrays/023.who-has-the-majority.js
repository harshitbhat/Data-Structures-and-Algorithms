/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
class Solution {
  // Function to find element with more appearances between two elements in an
  // array.
  majorityWins(arr, n, x, y) {
    // code here
    const countX = arr.reduce((acc, cur) => acc + (cur === x ? 1 : 0), 0);
    const countY = arr.reduce((acc, cur) => acc + (cur === y ? 1 : 0), 0);
    return countX === countY ? (x < y ? x : y) : countX > countY ? x : y;
  }
}
