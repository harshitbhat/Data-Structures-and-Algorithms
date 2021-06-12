const countDigits = (n) => {
  return n < 10 ? 1 : countDigits(parseInt(n / 10));
};
