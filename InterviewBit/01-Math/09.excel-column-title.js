module.exports = {
  //param A : integer
  //return a strings
  convertToTitle: function (n) {
    const characters = '_ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let ans = '';
    if (n <= 26) {
      return characters[n];
    }
    while (n) {
      let idx = n % 26;
      if (idx === 0) {
        ans = 'Z' + ans;
        n = Math.floor(n / 26) - 1;
        continue;
      }
      ans = characters[idx] + ans;
      n = Math.floor(n / 26);
    }
    return ans;
  },
};
