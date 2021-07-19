// Naive Method
const powerOfTwoN = (n) => {
  if (n == 0) {
    return false;
  }
  while (n != 1) {
    if (n % 2 != 0) {
      return false;
    }
    n = parseInt(n / 2);
  }
  return true;
};

// Efficient, The number must have only one set bit (n & n-1) sets rightmost bit 0

const powerOfTwo = (n) => {
  if (n == 0) {
    return false;
  }
  return (n & (n - 1)) === 0;
};
