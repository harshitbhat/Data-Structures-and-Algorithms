module.exports = {
  //param A : array of integers
  //return a array of integers
  solve: function (A) {
    return A.map((el) => el * el).sort((a, b) => a - b);
  },
};

/* -------------------------------------------------------------------------- */
/*                                  Editorial                                 */
/* -------------------------------------------------------------------------- */

// Find negative index and square both arrays and then merge of array - O(n) time ans O(n) space

module.exports = {
  //param A : array of integers
  //return a array of integers
  solve: function (A) {
    let idx = 0;
    const n = A.length;
    for (let i = 0; i < n; i++) {
      if (A[i] >= 0) {
        idx = i;
        break;
      }
    }

    const ans = [];

    let i = idx - 1;
    let j = idx;
    while (i >= 0 && j < n) {
      if (A[i] ** 2 < A[j] ** 2) {
        ans.push(A[i] ** 2);
        i--;
      } else {
        ans.push(A[j] ** 2);
        j++;
      }
    }
    while (i >= 0) {
      ans.push(A[i] ** 2);
      i--;
    }
    while (j < n) {
      ans.push(A[j] ** 2);
      j++;
    }

    return ans;
  },
};
