const countBitsFlip = (a, b) => {
  let x = a ^ b;
  let ans = 0;
  while (x) {
    x = x & (x - 1);
    ans++;
  }
  return ans;
};
