module.exports = {
  //param A : integer
  //return an integer
  reverse: function (n) {
    let i = 31;
    let sum = 0;
    while (n) {
      sum += 2 ** i * (n & 1);
      n = Math.floor(n / 2);
      i--;
    }
    return sum;
  },
};
