module.exports = {
  //param A : array of integers
  //return an integer
  findMinXor: function (arr) {
    arr.sort((a, b) => a - b);
    let ans = Infinity;
    for (let i = 1; i < arr.length; i++) {
      ans = Math.min(ans, arr[i] ^ arr[i - 1]);
    }
    return ans;
  },
};
