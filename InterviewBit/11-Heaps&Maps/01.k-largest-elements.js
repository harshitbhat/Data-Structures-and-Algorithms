module.exports = {
  //param A : array of integers
  //param B : integer
  //return a array of integers
  solve: function (A, B) {
    A.sort((a, b) => b - a);
    return A.slice(0, B);
  },
};
