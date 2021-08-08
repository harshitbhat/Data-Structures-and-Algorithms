module.exports = {
  //param A : array of integers
  //param B : array of integers
  //param C : integer
  //return an integer
  solve: function (profits, weights, capacity) {
    const dp = new Array(profits.length)
      .fill(0)
      .map(() => Array(capacity + 1).fill(0));

    for (let c = 1; c <= capacity; c++) {
      dp[0][c] = c >= weights[0] ? profits[0] : 0;
    }

    for (let i = 1; i < profits.length; i++) {
      for (let c = 1; c <= capacity; c++) {
        dp[i][c] =
          c >= weights[i]
            ? Math.max(dp[i - 1][c], profits[i] + dp[i - 1][c - weights[i]])
            : dp[i - 1][c];
      }
    }

    return dp[profits.length - 1][capacity];
  },
};
