const sumOfDigits = (n) => {
  return n < 10 ? n : (n % 10) + sumOfDigits(parseInt(n / 10));
};
