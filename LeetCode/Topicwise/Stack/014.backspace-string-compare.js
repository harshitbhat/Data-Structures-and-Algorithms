/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  const stk1 = [];
  const stk2 = [];
  for (const ch of s) {
    if (ch === '#') stk1.pop();
    else stk1.push(ch);
  }
  for (const ch of t) {
    if (ch === '#') stk2.pop();
    else stk2.push(ch);
  }
  return stk1.join('') === stk2.join('');
};
