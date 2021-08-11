const solve = (profits, weights, capacity, idx) => {
  if (
    capacity <= 0 ||
    profits.length === 0 ||
    weights.length !== profits.length ||
    idx >= profits.length
  ) {
    return 0;
  }

  let profit1 = 0;
  if (weights[idx] <= capacity) {
    profit1 =
      profits[idx] + solve(profits, weights, capacity - weights[idx], idx);
  }
  let profit2 = solve(profits, weights, capacity, idx + 1);

  return Math.max(profit1, profit2);
};

let solveKnapsackRec = function (profits, weights, capacity) {
  return solve(profits, weights, capacity, 0);
};

// var profits = [15, 50, 60, 90];
// var weights = [1, 3, 4, 5];
// console.log(
//   `Total knapsack profit: ---> ${solveKnapsackRec(profits, weights, 8)}`
// );

// Bottom UP - DP

let solveKnapsack = function (profits, weights, capacity) {
  const n = profits.length;
  const dp = new Array(n).fill(0).map(() => new Array(capacity + 1).fill(0));

  for (let c = 1; c <= capacity; c++) {
    dp[0][c] = c >= weights[0] ? profits[0] + dp[0][c - weights[0]] : 0;
  }

  for (let i = 1; i < n; i++) {
    for (let c = 1; c <= capacity; c++) {
      dp[i][c] =
        c >= weights[i]
          ? Math.max(dp[i - 1][c], profits[i] + dp[i][c - weights[i]])
          : dp[i - 1][c];
    }
  }
  return dp[n - 1][capacity];
};

var profits = [20, 15, 50];
var weights = [2, 1, 3];
console.log(
  `Total knapsack profit: ---> ${solveKnapsack(profits, weights, 5)}`
);
