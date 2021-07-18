/**
 * @param {number[][]} points
 * @return {number}
 */

var getIndexArray = function (arr, val) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      ans.push(i);
    }
  }
  return ans;
};

var maxPoints = function (points) {
  const m = points.length;
  const n = points[0].length;

  const dp = new Array(m);
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n).fill(0);
  }

  for (let i = 0; i < n; i++) {
    dp[0][i] = points[0][i];
  }

  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        dp[i][j] = Math.max(
          dp[i][j],
          points[i][j] + dp[i - 1][k] - Math.abs(j - k)
        );
      }
    }
  }
  for (const row of dp) {
    console.log(row);
  }
  return Math.max(...dp[m - 1]);
};

maxPoints([
  [4, 4, 2, 2, 1],
  [5, 5, 2, 1, 2],
  [3, 1, 5, 5, 2],
  [3, 2, 0, 0, 3],
]);
