module.exports = {
  //param A : string
  //param B : integer
  //return a strings
  convert: function (str, m) {
    const ans = new Array(m).fill('');
    let dir = true;
    let k = 0;
    let i = 0;
    while (i < str.length) {
      if (dir) {
        ans[k] += str[i];
        i++;
        k++;
      } else {
        ans[k] += str[i];
        i++;
        k--;
      }
      if (k === 0 || k === m - 1) {
        dir = !dir;
      }
    }
    return ans.join('');
  },
};
