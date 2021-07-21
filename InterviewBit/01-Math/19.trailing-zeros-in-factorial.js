module.exports = {
  //param A : integer
  //return an integer
  trailingZeroes: function (n) {
    let ans = 0;
    let i = 1;
    while (true) {
      const nums = Math.floor(n / 5 ** i);
      if (nums === 0) break;
      ans += nums;
      i++;
    }
    return ans;
  },
};
