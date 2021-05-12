const modInverse = (a, m) => {
  for (let i = 1; i < m; i++) {
    if (((x % m) * (a % m)) % m == 1) {
      return x;
    }
  }
  return -1;
};
