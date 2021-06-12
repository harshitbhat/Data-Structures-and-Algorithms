/**
 * @param {number[]} L
 * @param {number[]} R
 * @param {number} n
 * @param {number} maxx
 * @returns {number}
 */

class Solution {
  //Function to find the maximum occurred integer in all ranges.
  maxOccured(L, R, n, maxx) {
    //your code here
    const SIZE = 100000 + 1;
    const arr = new Array(SIZE).fill(0);
    for (let i = 0; i < n; i++) {
      arr[L[i]]++;
      arr[R[i] + 1]--;
    }
    let maxOccur = arr[0];
    let ans = 0;
    for (let i = 1; i < SIZE; i++) {
      arr[i] += arr[i - 1];
      if (maxOccur < arr[i]) {
        maxOccur = arr[i];
        ans = i;
      }
    }
    return ans;
  }
}
