module.exports = {
  //param A : integer
  //param B : integer
  //return an integer
  gcd: function (A, B) {
    if (B === 0) {
      return A;
    }
    return this.gcd(B, A % B);
  },
};
