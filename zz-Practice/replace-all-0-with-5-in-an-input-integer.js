/**
 * @param {number} n
 * @return {number}
 */

class Solution {
  // Method 1, using array.
  convertFive(n) {
    return (n + '')
      .split('')
      .map((el) => (el === '0' ? '5' : el))
      .join('');
  }
  // Method 2 using math
  convertr5(n) {
    let temp = 0;
    let idx = 0;
    while (n) {
      const last = n % 10;
      temp += last === 0 ? 5 * 10 ** idx : last * 10 ** idx;
      n = parseInt(n / 10);
      idx++;
    }
    return temp;
  }
}
