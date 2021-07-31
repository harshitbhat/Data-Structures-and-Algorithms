module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let ans = 0;
    let prefix = new Array(A.length + 1).fill(0);
    let odd = 0;
    for (let i = 0; i < A.length; i++) {
      prefix[odd]++;
      if ((A[i] & 1) === 1) odd++;
      if (odd >= B) ans += prefix[odd - B];
    }
    return ans;
  },
};
