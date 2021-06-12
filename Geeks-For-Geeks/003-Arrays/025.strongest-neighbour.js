/**
 * @param {number} sizeOfArray
 * @param {number[]} arr
 */
class Solution {
  // Function to find maximum for every adjacent pairs in the array.
  maximumAdjacent(sizeOfArray, arr) {
    // code here
    const ans = [];
    for (let i = 0; i < sizeOfArray - 1; i++) {
      ans.push(arr[i] > arr[i + 1] ? arr[i] : arr[i + 1]);
    }
    console.log(ans.join(' '));
  }
}
