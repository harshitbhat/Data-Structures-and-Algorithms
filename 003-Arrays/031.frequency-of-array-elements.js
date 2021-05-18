/**
 * @param {number[]} arr
 * @param {number} N
 * @param {number} P
 */

class Solution {
  frequencyCount(arr, N, P) {
    const freq = new Array(N).fill(0);
    for (let i = 0; i < N; i++) {
      freq[arr[i] - 1]++;
    }
    for (let i = 0; i < N; i++) {
      arr[i] = freq[i];
    }
  }
}
