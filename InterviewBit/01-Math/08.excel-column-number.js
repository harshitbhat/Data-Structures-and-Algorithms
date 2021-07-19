module.exports = {
  //param A : string
  //return an integer
  titleToNumber: function (str) {
    let ans = 0;
    let k = 0;
    for (let i = str.length - 1; i >= 0; i--) {
      const ch = str[i];
      const idx = ch.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
      ans += idx * 26 ** k++;
    }
    return ans;
  },
};
