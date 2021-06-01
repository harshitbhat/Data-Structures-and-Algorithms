/**
 * @param {number[]} arr
 * @return {number}
 */

class Solution {
  find_median(arr) {
    arr.sort((a, b) => a - b);
    const n = arr.length;
    const halfn = Math.floor(n / 2);
    console.log(n, halfn);
    return n % 2 === 0
      ? Math.floor((arr[halfn] + arr[halfn - 1]) / 2)
      : arr[halfn];
  }
}

const obj = new Solution();

console.log(obj.find_median([19, 11]));
