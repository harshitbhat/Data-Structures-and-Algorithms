function match(a, b) {
  return (
    (a === '(' && b === ')') ||
    (a === '[' && b === ']') ||
    (a === '{' && b === '}')
  );
}

function validParenthesis(s) {
  const stk = [];
  for (const ch of s) {
    if (ch === '(' || ch === '[' || ch === '{') {
      stk.push(ch);
    } else {
      const top = stk.length - 1;
      if (stk.length === 0) {
        return false;
      } else if (!match(stk[top], ch)) {
        return false;
      } else {
        stk.pop();
      }
    }
  }
  return stk.length === 0;
}

console.log(validParenthesis('{}([()])'));
console.log(validParenthesis('(())))'));
