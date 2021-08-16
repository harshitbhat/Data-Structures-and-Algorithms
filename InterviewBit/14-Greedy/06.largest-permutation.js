module.exports = {
  //param A : array of integers
  //param B : integer
  //return a array of integers
  solve: function (A, B) {
    const n = A.length;
    const pos = new Array(n + 1);

    for (let i = 0; i < n; i++) {
      pos[A[i]] = i;
    }

    for (let i = 0; i < n && B; i++) {
      if (A[i] === n - i) continue;

      let temp = pos[n - i];

      pos[A[i]] = pos[n - i];
      pos[n - i] = i;

      [A[temp], A[i]] = [A[i], A[temp]];
      --B;
    }

    return A;
  },
};
