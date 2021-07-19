module.exports = {
  //param A : integer
  //return an integer
  isPrime: function (A) {
    if (A <= 1) {
      return 0;
    }
    if (A === 2 || A === 3) {
      return 1;
    }
    if (A % 2 === 0 || A % 3 === 0) {
      return 0;
    }
    let i = 5;
    while (i * i <= A) {
      if (A % i === 0 || A % (i + 2) === 0) {
        return 0;
      }
      i += 6;
    }
    return 1;
  },
};
