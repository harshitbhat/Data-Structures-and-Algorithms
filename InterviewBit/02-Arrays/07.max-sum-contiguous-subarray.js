module.exports = {
  //param A : array of integers
  //return an integer
  maxSubArray: function (arr) {
    let curr = arr[0];
    let ans = curr;
    for (let i = 1; i < arr.length; i++) {
      curr = Math.max(curr + arr[i], arr[i]);
      ans = Math.max(curr, ans);
    }
    return ans;
  },
};
