module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (arr, k) {
    const n = arr.length;
    let j = n - 1;
    let ans = 0;
    const MOD = 10 ** 9 + 7;
    arr.sort((a, b) => a - b);
    while (k > 0) {
      if (k === 1) {
        ans = ((ans % MOD) + (arr[j] % MOD) + (arr[0] % MOD)) % MOD;
        k--;
      } else {
        ans = ((ans % MOD) + (arr[j] % MOD) + (arr[j] % MOD)) % MOD;
        j--;
        k--;
      }
    }
    return ans;
  },
};
