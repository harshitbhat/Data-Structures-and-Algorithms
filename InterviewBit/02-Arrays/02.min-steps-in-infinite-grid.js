module.exports = {
  //param A : array of integers
  //param B : array of integers
  //return an integer
  coverPoints: function (A, B) {
    let ans = 0;
    for (let i = 1; i < A.length; i++) {
      let yDiff = Math.abs(B[i] - B[i - 1]);
      let xDiff = Math.abs(A[i] - A[i - 1]);
      if (xDiff === yDiff) {
        ans += xDiff;
      } else if (xDiff < yDiff) {
        ans += xDiff;
        yDiff -= xDiff;
        ans += yDiff;
      } else {
        ans += yDiff;
        xDiff -= yDiff;
        ans += xDiff;
      }
    }
    return ans;
  },
};

// Test data
/*

A : [ 4, 8, -7, -5, -13, 9, -7, 8 ]
B : [ 4, -15, -10, -3, -13, 12, 8, -8 ]
Expected 108

*/
