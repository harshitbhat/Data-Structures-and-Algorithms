module.exports = {
  //param A : string
  //param B : string
  //return an integer
  solve: function (A, B) {
    const m = A.length;
    const n = B.length;

    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (A[i - 1] === B[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }

    return dp[m][n];
  },
};
