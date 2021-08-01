function solution(ans, arr, pos, n, open, close) {
  if (close === n) {
    ans.push([...arr].join(''));
    return;
  } else {
    if (open > close) {
      arr[pos] = ')';
      solution(ans, arr, pos + 1, n, open, close + 1);
    }
    if (open < n) {
      arr[pos] = '(';
      solution(ans, arr, pos + 1, n, open + 1, close);
    }
  }
}

function solve(ans, arr, n) {
  if (n > 0) {
    solution(ans, arr, 0, n, 0, 0);
  }
  return;
}

module.exports = {
  //param A : integer
  //return a array of strings
  generateParenthesis: function (n) {
    const arr = new Array(2 * n);
    const ans = [];
    solve(ans, arr, n);
    ans.sort();
    return ans;
  },
};

function generateParenthesis(n) {
  const arr = new Array(2 * n);
  const ans = [];
  solve(ans, arr, n);
  ans.sort();
  return ans;
}

const ans = generateParenthesis(3);
console.log(ans);
