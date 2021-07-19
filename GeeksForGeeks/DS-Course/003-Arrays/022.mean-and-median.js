/**
 * @param {number[]} A
 * @param {number} N
 * @returns {number}
 */
class Solution {
  //Function to find median of the array elements.
  median(A, N) {
    A.sort(function (a, b) {
      return a - b;
    });
    //Your code here
    return A[Math.floor(N % 2 === 0 ? N / 2 - 1 : N / 2)];
    //If median is fraction then convert it to integer and return
  }
  //Function to find mean of the array elements.
  mean(A, N) {
    //your code here
    return Math.floor(A.reduce((acc, cur) => acc + cur, 0) / N);
  }
}
