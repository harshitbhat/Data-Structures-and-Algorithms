module.exports = {
  //param A : integer
  //param B : integer
  //param C : integer
  //param D : integer
  //return an integer
  solve: function (A, B, C, D) {
    if ((A === B && C === D) || (A === C && B === D) || (A === D && B === C)) {
      return 1;
    }
    return 0;
  },
};
