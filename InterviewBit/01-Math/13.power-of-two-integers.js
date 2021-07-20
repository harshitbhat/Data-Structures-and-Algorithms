module.exports = {
  //param A : integer
  //return an integer
  isPower: function (n) {
    if (n === 1) {
      return 1;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      for (let j = 2; i ** j <= n; j++) {
        if (i ** j === n) {
          return 1;
        }
      }
    }
    return 0;
  },
};
