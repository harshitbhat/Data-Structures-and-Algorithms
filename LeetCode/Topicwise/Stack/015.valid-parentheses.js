/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stk = [];
  for (const ch of s) {
    const top = stk.length - 1;
    if (ch === '(' || ch === '[' || ch === '{') {
      stk.push(ch);
    } else {
      if (
        (ch === ')' && stk[top] === '(') ||
        (ch === ']' && stk[top] === '[') ||
        (ch === '}' && stk[top] === '{')
      ) {
        stk.pop();
      } else {
        stk.push(ch);
      }
    }
  }
  console.log(stk);
  return stk.length === 0;
};
