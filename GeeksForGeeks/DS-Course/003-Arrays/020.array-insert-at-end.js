//User function Template for javascript

// You only need to insert the given element at
// the end, i.e., at index sizeOfArray - 1. You may
// assume that the array already has sizeOfArray - 1
// elements.
/**
 * @param {number[]} arr
 * @param {number} sizeOfArray
 * @param {number} element
 */
class Solution {
  insertAtEnd(arr, sizeOfArray, element) {
    // code here
    arr[sizeOfArray - 1] = element;
  }
}
