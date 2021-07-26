module.exports = {
  //param A : integer
  //return an integer
  solve: function (n) {
    let ans = 0;
    while ((n & 1) === 0) {
      ans++;
      n = n >> 1;
    }
    return ans;
  },
};
