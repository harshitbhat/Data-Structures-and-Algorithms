module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (arr, B) {
    const hash = {};
    for (const el of arr) {
      hash[el] = true;
    }
    let ans = 0;
    for (const el of arr) {
      if (hash[el ^ B]) {
        ans++;
      }
    }
    return Math.floor(ans / 2);
  },
};
