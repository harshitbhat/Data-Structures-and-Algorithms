/**
 * @param {number[]} arr
 * @param {number} N
 * @param {number} X
 * @return {number}
 */
class Solution {
  search(arr, N, X) {
    for (let i = 0; i < N; i++) {
      if (arr[i] === X) return i;
    }
    return -1;
  }
}
