let max;

function solve(str, k) {
  if (k === 0) {
    return;
  }
  const n = str.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (str[i] < str[j]) {
        [str[i], str[j]] = [str[j], str[i]];
        if (str.join('') > max) {
          max = str.join('');
        }
        solve(str, k - 1);
        [str[i], str[j]] = [str[j], str[i]];
      }
    }
  }
}

module.exports = {
  //param A : string
  //param B : integer
  //return a strings
  solve: function (A, B) {
    max = A;
    solve(A.split(''), B);
    return max;
  },
};
