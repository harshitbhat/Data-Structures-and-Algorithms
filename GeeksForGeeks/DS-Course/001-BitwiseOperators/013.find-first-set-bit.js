const getFirstSetBit = (n) => {
  let ans = 1;
  while (n) {
    if (n % 2 != 0) {
      return ans;
    }
    n = parseInt(n / 2);
    ans++;
  }
  return 0;
};
