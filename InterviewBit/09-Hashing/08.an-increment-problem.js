module.exports = {
  //param A : array of integers
  //return a array of integers
  solve: function (A) {
    const hash = {};
    for (let i = 0; i < A.length; i++) {
      if (hash[A[i]]) {
        hash[A[i]].sort((a, b) => a - b);
        hash[A[i]].push(i);
        const idx = hash[A[i]][0];
        hash[A[i]].shift();
        A[idx]++;
        if (hash[A[idx]]) {
          hash[A[idx]].push(idx);
        } else {
          hash[A[idx]] = [idx];
        }
      } else {
        hash[A[i]] = [i];
      }
    }
    return A;
  },
};
