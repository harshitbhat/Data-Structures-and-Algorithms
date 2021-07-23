module.exports = {
  //param A : array of integers
  //return an integer
  repeatedNumber: function (arr) {
    const count = {};
    for (const el of arr) {
      if (count[el]) {
        count[el]++;
      } else {
        count[el] = 1;
      }
    }
    for (const key in count) {
      if (count[key] > 1) {
        return key;
      }
    }
    return -1;
  },
};

/* -------------------------------------------------------------------------- */
/*                             Editorial Solution                             */
/* -------------------------------------------------------------------------- */
module.exports = {
  //param A : array of integers
  //return an integer
  repeatedNumber: function (A) {
    for (var i = 0; i < A.length; i++) {
      if (A[Math.abs(A[i]) - 1] > 0) {
        A[Math.abs(A[i]) - 1] = -A[Math.abs(A[i]) - 1];
      } else {
        return Math.abs(A[i]);
      }
    }
    return -1;
  },
};
