module.exports = {
  //param A : integer
  //return a strings
  findDigitsInBinary: function (n) {
    if (n === 0) {
      return '0';
    }
    let ans = '';
    while (n) {
      ans = (n % 2) + ans;
      n = Math.floor(n / 2);
    }
    return ans;
  },
};
