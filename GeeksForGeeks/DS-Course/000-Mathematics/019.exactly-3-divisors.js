const isPrime = (n) => {
  if (n == 1) {
    return false;
  }
  if (n == 2 || n == 3) {
    return true;
  }
  if (n % 2 == 0 || n % 3 == 0) {
    return false;
  }

  let i = 5;

  while (i * i <= n) {
    if (n % i == 0 || n % (i + 2) == 0) {
      return false;
    }
    i += 6;
  }
  return true;
};

const exactly3Divisors = (n) => {
  let i = 2;
  let ans = 0;
  if (i * i <= n) {
    if (isPrime(i)) {
      ans++;
    }
    i++;
  }
  return ans;
};
