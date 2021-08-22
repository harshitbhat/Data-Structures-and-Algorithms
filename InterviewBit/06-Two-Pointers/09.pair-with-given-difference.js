module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A, B) {
    const hash = new Map();
    for (let i = 0; i < A.length; i++) {
      hash.set(A[i], i);
    }
    for (const el of A) {
      if (hash.has(el - B) && hash.get(el) !== hash.get(el - B)) {
        return 1;
      }
    }
    return 0;
  },
};
