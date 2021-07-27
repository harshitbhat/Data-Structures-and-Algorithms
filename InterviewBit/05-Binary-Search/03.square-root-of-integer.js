module.exports = {
  //param A : integer
  //return an integer
  sqrt: function (n) {
    if (n <= 1) {
      return n;
    }
    let low = 0;
    let high = n;
    let mid;
    let ans = -1;
    while (low <= high) {
      mid = Math.floor((low + high) / 2);
      if (mid * mid === n) {
        return mid;
      } else if (mid * mid > n) {
        high = mid - 1;
      } else {
        low = mid + 1;
        ans = mid;
      }
    }
    return ans;
  },
};
