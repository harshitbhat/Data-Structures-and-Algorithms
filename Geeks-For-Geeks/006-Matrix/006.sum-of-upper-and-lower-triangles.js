/**
 * @param {number[][]} mat
 * @param {number} N
 * @returns {number[]}
 */
class Solution {
  //Function to return sum of upper and lower triangles of a matrix.
  sumTriangles(mat, N) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (i <= j) sum1 += mat[i][j];
        if (j <= i) sum2 += mat[i][j];
      }
    }
    return [sum1, sum2];
  }
}
