const factorial = (n) => {
  if (n === 0) return 1;
  let ans = 1;
  for (let i = 1; i <= n; i++) {
    ans *= i;
  }
  return ans;
};

const nCr = (n, r) => {
  return Math.round(factorial(n) / (factorial(r) * factorial(n - r)));
};

module.exports = {
  //param A : integer
  //return a array of integers
  getRow: function (k) {
    const row = [];
    for (let i = 0; i <= k; i++) {
      row.push(nCr(k, i));
    }
    return row;
  },
};
