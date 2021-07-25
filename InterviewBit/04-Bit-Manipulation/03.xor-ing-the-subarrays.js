module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (arr) {
    if (arr.length % 2 === 0) return 0;
    let ans = 0;
    for (let i = 0; i < arr.length; i += 2) {
      ans ^= arr[i];
    }
    return ans;
  },
};
