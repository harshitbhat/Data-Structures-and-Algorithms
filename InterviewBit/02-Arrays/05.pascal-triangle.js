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
  //return a array of array of integers
  solve: function (n) {
    const triangle = [];
    for (let i = 0; i < n; i++) {
      let row = [];
      for (let j = 0; j <= i; j++) {
        row.push(nCr(i, j));
      }
      triangle.push(row);
    }
    return triangle;
  },
};
