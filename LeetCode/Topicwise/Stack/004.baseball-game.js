/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  const stk = [];
  for (const ch of ops) {
    if (ch === 'C') {
      stk.pop();
    } else if (ch === 'D') {
      stk.push(stk[stk.length - 1] * 2);
    } else if (ch === '+') {
      stk.push(stk[stk.length - 1] + stk[stk.length - 2]);
    } else {
      stk.push(parseInt(ch));
    }
  }
  return stk.reduce((sum, el) => sum + el, 0);
};
