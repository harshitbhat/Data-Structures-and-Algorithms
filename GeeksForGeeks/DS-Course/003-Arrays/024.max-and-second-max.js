/**
 * Function to find largest and second largest element
 * @param {number} sizeOfArray
 * @param {number[]} arr
 * @returns {number[]}
 */
class Solution {
  largestAndSecondLargest(sizeOfArray, arr) {
    // code here
    const largest = Math.max(...arr);
    let secondLargest = -1;
    for (let i = 0; i < sizeOfArray; i++) {
      if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i];
      }
    }
    return [largest, secondLargest];
  }
}
