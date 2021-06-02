/**
 * @param {number} N
 * @return {string}
 */

class Solution {
  getBinaryRep(N) {
    //code here
    let ans = '';
    while (N) {
      ans += N % 2;
      N = Math.floor(N / 2);
    }
    return ans.split('').reverse().join('').padStart(30, '0');
  }
}
