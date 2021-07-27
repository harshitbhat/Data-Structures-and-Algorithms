module.exports = {
  //param A : string
  //return an integer
  atoi: function (A) {
    A = A.split(' ');
    A = A[0];
    console.log(A);
    let ans = '';
    if (A[0] === '+') {
      A = A.slice(1);
    } else if (A[0] === '-') {
      ans += '-';
      A = A.slice(1);
    }
    for (const ch of A) {
      if ('0123456789'.includes(ch)) {
        ans += ch;
      }
    }
    if (ans === '-' || ans === '') {
      ans = 0;
    }
    return ans;
  },
};
