/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
 */

// TLE
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

// TO Optimise
class Solution2 {
  //Function to find the smallest positive number missing from the array.
  missingNumber(arr, n) {
    //Move all negative to left side of the array
    let k = 0;
    for (let i = 0; i < n; i++) {
      if (arr[i] <= 0) {
        [arr[k], arr[i]] = [arr[i], arr[k]];
        k++;
      }
    }
  }
}
