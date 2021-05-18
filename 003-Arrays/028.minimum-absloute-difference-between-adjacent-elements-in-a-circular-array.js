/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
 */

class Solution {
  //Function to find minimum adjacent difference in a circular array.
  minAdjDiff(arr, n) {
    //your code here
    let ans = Number.POSITIVE_INFINITY;
    for (let i = 1; i < arr.length; i++) {
      let diff = Math.abs(arr[i - 1] - arr[i]);
      if (diff < ans) ans = diff;
    }
    const last = Math.abs(arr[0] - arr[arr.length - 1]);
    if (last < ans) ans = last;
    return ans;
  }
}
