module.exports = {
  //param A : string
  //return an integer
  solve: function (str) {
    str = str.toLowerCase();
    let ans = 0;
    const MOD = 10003;
    const vowels = 'aeiou';
    const l = str.length;
    for (let i = 0; i < l; i++) {
      const ch = str[i];
      if (vowels.includes(ch)) {
        ans = ((ans % MOD) + ((l - i) % MOD)) % MOD;
      }
    }
    return ans;
  },
};
