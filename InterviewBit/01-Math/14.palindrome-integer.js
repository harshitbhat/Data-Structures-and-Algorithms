module.exports = {
  //param A : integer
  //return an integer
  isPalindrome: function (A) {
    A = A + '';
    let i = 0;
    let j = A.length - 1;
    while (i <= j) {
      if (A[i] !== A[j]) {
        return 0;
      }
      i++;
      j--;
    }
    return 1;
  },
};
