function ropeCutting(n, a, b, c) {
  if (n < 0) {
    return -1;
  }
  if (n === 0) {
    return 0;
  }
  const ans = Math.max(
    ropeCutting(n - a, a, b, c),
    ropeCutting(n - b, a, b, c),
    ropeCutting(n - c, a, b, c)
  );
  if (ans === -1) {
    return -1;
  }
  return ans + 1;
}

const n = 23,
  a = 12,
  b = 9,
  c = 11;

ans = ropeCutting(n, a, b, c);
console.log(ans);
