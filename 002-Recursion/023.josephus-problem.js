const josephus = (n, k) => {
  if (n == 0) {
    return 1;
  }
  return (josephus(n - 1, k) + k) % n;
};
