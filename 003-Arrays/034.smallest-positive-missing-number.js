/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
 */

class Solution {
  //Function to find the smallest positive number missing from the array.
  missingNumber(arr, n) {
    const check = {};
    arr.sort((a, b) => a - b);
    const mySet = new Set(arr);
    let k = 1;
    for (let item of mySet) {
      if (item > 0) {
        if (item !== k) {
          break;
        } else {
          k++;
        }
      }
    }
    return k;
  }
}
