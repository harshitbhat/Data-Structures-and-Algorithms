const posOfRightMostDiffBit = (m, n) => {
  let x = m ^ n;
  let ans = 1;
  while (x) {
    if (x % 2 == 1) {
      return ans;
    }
    x = parseInt(x / 2);
    ans++;
  }
  return -1;
};
