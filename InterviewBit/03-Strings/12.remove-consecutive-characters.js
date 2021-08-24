module.exports = {
  //param A : string
  //param B : integer
  //return a strings
  solve: function (A, B) {
    let i = 0,
      j = 0;
    let ans = '';

    while (i < A.length) {
      j = i;
      while (A[j] === A[j + 1] && j < A.length) {
        j++;
      }
      if (j - i + 1 !== B) {
        ans += A.split('')
          .splice(i, j - i + 1)
          .join('');
      }
      i = j + 1;
    }

    return ans;
  },
};

// aabcd
