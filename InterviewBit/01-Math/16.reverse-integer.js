const is32Bit = (n) => {
  if (n > 0) {
    return n <= 2 ** 31 - 1;
  } else {
    return n >= -2147483648;
  }
};

module.exports = {
  //param A : integer
  //return an integer
  reverse: function (n) {
    if (!is32Bit(n)) {
      return 0;
    }
    let isNegative = n < 0;
    n = Math.abs(n);
    let rev = 0;
    while (n) {
      rev = rev * 10 + (n % 10);
      n = Math.floor(n / 10);
    }
    if (isNegative) {
      rev = rev * -1;
    }
    return is32Bit(rev) ? rev : 0;
  },
};
