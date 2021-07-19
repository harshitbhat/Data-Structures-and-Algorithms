/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @returns {number[][]}
 */
class Solution {
  //Function to add two matrices.
  sumMatrix(A, B) {
    const C = [];
    if (A.length !== B.length || A[0].length !== B[0].length) {
      return C;
    }
    for (let i = 0; i < A.length; i++) {
      const temp = [];
      for (let j = 0; j < A[0].length; j++) {
        temp.push(A[i][j] + B[i][j]);
      }
      C.push(temp);
    }
    return C;
  }
}

const obj = new Solution();

console.log(
  obj.sumMatrix(
    [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    [
      [1, 3],
      [3, 2],
      [3, 3],
    ]
  )
);
