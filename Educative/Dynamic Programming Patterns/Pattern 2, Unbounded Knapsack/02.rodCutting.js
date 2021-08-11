// Recursive
const solve = (lengths, prices, n, idx) => {
  if (n <= 0 || idx >= lengths.length) {
    return 0;
  }
  let profit1 = 0;
  if (lengths[idx] <= n) {
    profit1 = prices[idx] + solve(lengths, prices, n - lengths[idx], idx);
  }
  let profit2 = solve(lengths, prices, n, idx + 1);

  return Math.max(profit1, profit2);
};

const solveRodCutting = function (lengths, prices, n) {
  return solve(lengths, prices, n, 0);
};
