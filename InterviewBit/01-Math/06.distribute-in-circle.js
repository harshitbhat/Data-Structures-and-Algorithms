// Mine
module.exports = {
  //param A : integer
  //param B : integer
  //param C : integer
  //return an integer
  solve: function (A, B, C) {
    A = A % B;
    A--;
    C += A;
    if (C > B) {
      C = C % B;
    }
    return C;
  },
};

// Better

function solve(A, B, C) {
  const a = (A + C - 1) % B;
  return a === 0 ? B : a;
}
