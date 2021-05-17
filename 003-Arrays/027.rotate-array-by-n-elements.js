/**
 * @param {number[]} arr
 * @param {number} d
 * @param {number} n
 */

class Solution {
  //Function to rotate an array by d elements in counter-clockwise direction.
  rotateArr(arr, d, n) {
    // code here
    const reverse = (arr, st, end) => {
      while (st < end) {
        [arr[st], arr[end]] = [arr[end], arr[st]];
        st++;
        end--;
      }
    };
    reverse(arr, 0, d - 1);
    reverse(arr, d, n - 1);
    reverse(arr, 0, n - 1);
  }
}
