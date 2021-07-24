module.exports = {
  //param A : integer
  //return an integer
  numSetBits: function (n) {
    let ans = 0;
    while (n) {
      ans += n & 1;
      n = n >> 1;
    }
    return ans;
  },
};
