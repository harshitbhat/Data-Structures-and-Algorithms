module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (arr, B) {
    let ans = 0;
    const n = arr.length;
    arr.sort((a, b) => a - b);
    for (let i = 1; i <= B; i++) {
      ans += arr[n - 1];
      arr[n - 1]--;
      arr.sort((a, b) => a - b);
    }
    return ans;
  },
};

/* -------------------------------------------------------------------------- */
/*                             Editorial SOlution                             */
/* -------------------------------------------------------------------------- */

module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A, B) {
    const maxHeapify = (A, n) => {
      for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        let j = 2 * i;
        while (j < n - 1) {
          if (A[j + 1] > A[j]) {
            j = j + 1;
          }
          if (A[j] > A[i]) {
            [A[i], A[j]] = [A[j], A[i]];
            i = j;
            j = 2 * i + 1;
          } else {
            break;
          }
        }
      }
      return A[0];
    };
    let res = 0;
    for (let i = 0; i < B; i++) {
      res += maxHeapify(A, A.length);
      A[0] -= 1;
    }
    return res;
  },
};
