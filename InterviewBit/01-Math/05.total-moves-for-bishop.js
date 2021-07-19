module.exports = {
  //param A : integer
  //param B : integer
  //return an integer
  solve: function (x, y) {
    if (x === 1 || x === 8 || y === 1 || y === 8) {
      return 7;
    }
    if (x === 2 || x === 7 || y === 2 || y === 7) {
      return 9;
    }
    if (x === 3 || x === 6 || y === 3 || y === 6) {
      return 11;
    }
    if (x === 4 || x === 5 || y === 4 || y === 5) {
      return 13;
    }
  },
};
