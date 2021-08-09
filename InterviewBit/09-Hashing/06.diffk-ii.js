module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  diffPossible: function (arr, k) {
    const hash = {};
    for (const el of arr) {
      if (hash[el]) {
        hash[el]++;
      } else {
        hash[el] = 1;
      }
    }
    for (const el of arr) {
      if (hash[el - k]) {
        if (el === el - k) {
          if (hash[el] > 1) {
            return 1;
          }
        } else {
          return 1;
        }
      }
    }
    return 0;
  },
};
