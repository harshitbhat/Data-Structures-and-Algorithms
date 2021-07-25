module.exports = {
  //param A : array of integers
  //param B : array of integers
  //return a array of integers
  intersect: function (A, B) {
    const n = A.length;
    const m = B.length;
    let i = 0;
    let j = 0;
    const ans = [];
    while (i < n && j < m) {
      if (A[i] === B[j]) {
        ans.push(A[i]);
        i++;
        j++;
      } else if (A[i] < B[j]) {
        i++;
      } else {
        j++;
      }
    }
    return ans;
  },
};
