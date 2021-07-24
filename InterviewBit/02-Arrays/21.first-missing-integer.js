module.exports = {
  //param A : array of integers
  //return an integer
  firstMissingPositive: function (arr) {
    const myHash = {};
    for (const el of arr) {
      if (el > 0) {
        myHash[el] = true;
      }
    }
    let k = 1;
    while (true) {
      if (!myHash[k]) {
        return k;
      }
      k++;
    }
  },
};
