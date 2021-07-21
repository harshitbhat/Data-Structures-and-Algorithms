const MOD = 10 ** 9 + 7;
const dp = {};

dp[1] = [
  [1, 1],
  [1, 0],
];

dp[2] = [
  [2, 1],
  [1, 1],
];

// Approach right, problem in modulo function
const multiply = (mat1, mat2) => {
  const ans = [];

  for (let i = 0; i < 2; i++) {
    const row = [];
    for (let j = 0; j < 2; j++) {
      let prod = 0;
      for (let k = 0; k < 2; k++) {
        const mult = (((mat1[i][k] % MOD) * mat2[k][j]) % MOD) % MOD;
        prod = ((prod % MOD) + (mult % MOD)) % MOD;
      }
      row.push(prod);
    }
    ans.push(row);
  }
  return ans;
};

const fibonacci = (n) => {
  if (dp[n]) {
    return dp[n];
  }

  let a, b;
  a = Math.floor(n / 2);
  b = Math.ceil(n / 2);

  if (dp[a] && dp[b]) {
    dp[n] = multiply(dp[a], dp[b]);
  } else {
    const first = fibonacci(a);
    const second = fibonacci(b);
    dp[n] = multiply(first, second);
  }
  return dp[n];
};

module.exports = {
  solve: function (n) {
    return fibonacci(n - 1)[0][0];
  },
};
