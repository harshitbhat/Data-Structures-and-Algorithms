module.exports = {
  //param A : array of array of integers
  //param B : integer
  //return an integer
  solve: function (mat, b) {
    const n = mat.length;

    const dp = new Array(n).fill(0).map((el) => Array(n).fill(0));

    dp[0][0] = mat[0][0];
    for (let i = 1; i < n; i++) {
      dp[0][i] = dp[0][i - 1] + mat[0][i];
    }
    for (let i = 1; i < n; i++) {
      dp[i][0] = dp[i - 1][0] + mat[i][0];
    }
    for (let i = 1; i < n; i++) {
      for (let j = 1; j < n; j++) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1] + mat[i][j];
      }
    }

    let ans = -Infinity;
    for (let i = b - 1; i < n; i++) {
      for (let j = b - 1; j < n; j++) {
        if (i - b >= 0 && j - b >= 0) {
          ans = Math.max(
            ans,
            dp[i][j] - dp[i - b][j] - dp[i][j - b] + dp[i - b][j - b]
          );
        } else if (i - b >= 0) {
          ans = Math.max(ans, dp[i][j] - dp[i - b][j]);
        } else if (j - b >= 0) {
          ans = Math.max(ans, dp[i][j] - dp[i][j - b]);
        } else {
          ans = Math.max(ans, dp[i][j]);
        }
      }
    }

    return ans;
  },
};

function solve(mat, b) {
  const n = mat.length;

  const dp = new Array(n).fill(0).map((el) => Array(n).fill(0));

  dp[0][0] = mat[0][0];
  for (let i = 1; i < n; i++) {
    dp[0][i] = dp[0][i - 1] + mat[0][i];
  }
  for (let i = 1; i < n; i++) {
    dp[i][0] = dp[i - 1][0] + mat[i][0];
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1] + mat[i][j];
    }
  }

  for (const row of dp) {
    let pr = '';
    for (const el of row) {
      pr += (el + '').padStart(5);
    }
    console.log(pr);
  }

  let ans = -Infinity;
  for (let i = b - 1; i < n; i++) {
    for (let j = b - 1; j < n; j++) {
      if (i - b >= 0 && j - b >= 0) {
        ans = Math.max(
          ans,
          dp[i][j] - dp[i - b][j] - dp[i][j - b] + dp[i - b][j - b]
        );
      } else if (i - b >= 0) {
        ans = Math.max(ans, dp[i][j] - dp[i - b][j]);
      } else if (j - b >= 0) {
        ans = Math.max(ans, dp[i][j] - dp[i][j - b]);
      } else {
        ans = Math.max(ans, dp[i][j]);
      }
    }
  }

  return ans;
}

const mat = [
  [1, 1, 1, 1, 1],
  [2, 2, 2, 2, 2],
  [3, 8, 6, 7, 3],
  [4, 4, 4, 4, 4],
  [5, 5, 5, 5, 5],
];

const mat2 = [
  [2, 2],
  [2, 2],
];

const mat3 = [
  [-67, -31, 42, -56, -84, -19, 98, 22, -49, -79],
  [-1, 57, -24, -8, 89, -25, 12, -100, 10, -97],
  [-31, -39, -12, -99, 89, -45, -77, -98, 85, 82],
  [-15, -12, -74, -83, 57, -68, 32, 69, 54, 21],
  [89, 76, 29, 68, -8, -75, 55, -66, 49, -59],
  [12, 45, -40, 18, 53, 39, -77, -21, 96, -13],
  [29, 49, -63, -34, 49, 93, 95, -3, -84, -14],
  [5, -12, -18, -45, 34, 14, 1, 16, -29, 86],
  [-37, 13, 55, 85, -47, 12, -92, -68, 45, 13],
  [56, 21, 58, -54, 82, -19, 44, 96, -78, 29],
];

const ans = solve(mat3, 2);
console.log(ans);
