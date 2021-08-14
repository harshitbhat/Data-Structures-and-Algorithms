module.exports = {
  //param A : array of integers
  //param B : array of integers
  //return an integer
  mice: function (A, B) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);

    let ans = -Infinity;
    for (let i = 0; i < A.length; i++) {
      ans = Math.max(ans, Math.abs(A[i] - B[i]));
    }
    return ans;
  },
};
