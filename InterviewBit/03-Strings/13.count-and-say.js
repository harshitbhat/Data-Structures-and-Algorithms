module.exports = {
  //param A : integer
  //return a strings
  countAndSay: function (n) {
    n = n - 1;
    let s = '1';
    let ans = '';
    let i;
    while (n !== 0) {
      i = 0;
      while (i < s.length) {
        let count = 0;
        while (s[i] === s[i + 1]) {
          count++;
          i++;
        }
        ans += count + 1 + s[i];
        i++;
      }
      s = ans;
      ans = '';
      n--;
    }
    return s;
  },
};
