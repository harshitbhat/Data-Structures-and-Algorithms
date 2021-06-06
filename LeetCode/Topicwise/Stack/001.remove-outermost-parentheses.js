/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  const stk = [];
  let ans = '';
  let idx = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      if (stk.length === 0) idx = i;
      stk.push(s[i]);
    } else {
      stk.pop();
      if (stk.length === 0) {
        ans += s.substring(idx + 1, i);
      }
    }
  }
  return ans;
};
