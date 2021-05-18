/**
 * @param {number[]} a
 * @param {number} n
 * @returns {number[]}
 */

class Solution {
  //Function to find the leaders in the array.
  leaders(arr, n) {
    // code here
    const leader = [];
    let curLeader = arr[n - 1];
    leader.push(curLeader);
    for (let i = n - 2; i >= 0; i--) {
      if (arr[i] >= curLeader) {
        curLeader = arr[i];
        leader.push(curLeader);
      }
    }
    return leader.reverse();
  }
}
