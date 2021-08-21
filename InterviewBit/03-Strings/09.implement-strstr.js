module.exports = {
  //param A : string
  //param B : string
  //return an integer
  strStr: function (A, B) {
    if (A === '' || B === '') {
      return -1;
    }
    let i = 0;
    let j = 0;
    while (i < A.length) {
      if (A[i] === B[j]) {
        const i_idx = i;
        const j_idx = j;
        while (A[i] === B[j] && i < A.length && j < B.length) {
          i++;
          j++;
        }
        if (j === B.length) {
          return i_idx;
        } else {
          i = i_idx + 1;
          j = 0;
        }
      } else {
        i++;
      }
    }
    return -1;
  },
};
