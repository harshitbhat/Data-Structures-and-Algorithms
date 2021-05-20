/**
 * @param {number[]} arr
 * @param {number} n
 */

class Solution {
  //Function to rearrange  the array elements alternately. - Extra Space
  rearrange(arr, n) {
    const ans = new Array(n).fill(0);
    let k = 0;
    for (let i = 1; i < n; i += 2) {
      ans[i] = arr[k++];
    }
    k = n - 1;
    for (let i = 0; i < n; i += 2) {
      ans[i] = arr[k--];
    }
    for (let i = 0; i < n; i++) {
      arr[i] = ans[i];
    }
  }
}

const arr = [1, 2, 3, 4, 5, 6];

const obj = new Solution();

obj.rearrange(arr, arr.length);
