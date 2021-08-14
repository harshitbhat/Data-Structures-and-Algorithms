module.exports = {
  //param A : array of integers
  //return an integer
  bulbs: function (arr) {
    let ans = 1;
    let k = 0;
    while (arr[k] === 1) {
      k++;
    }
    if (k >= arr.length) {
      return 0;
    }
    for (let i = k + 1; i < arr.length; i++) {
      if (arr[i] !== arr[i - 1]) {
        ans++;
      }
    }
    return ans;
  },
};
