module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (arr) {
    let ans = 0;
    const mod = 10 ** 9 + 7;
    const n = arr.length;
    const prefix = new Array(n).fill(0);

    arr.sort((a, b) => a - b);
    prefix[0] = arr[0];
    for (let i = 1; i < n; i++) {
      prefix[i] += prefix[i - 1] + arr[i];
    }
    for (let i = 0; i < n - 1; i++) {
      ans = ((ans % mod) + (prefix[i] % mod)) % mod;
    }
    return ans;
  },
};
