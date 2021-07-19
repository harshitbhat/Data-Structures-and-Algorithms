const allDivisors = (n) => {
  const divisors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      divisors.push(i);
    }
  }
  return divisors;
};

const allDivisorsE = (n) => {
  let i = 1;
  const divisors = [];
  while (i * i <= n) {
    if (n % i == 0) {
      divisors.push(i);
      if (i * i !== n) {
        divisors.push(parseInt(n / i));
      }
    }
    i++;
  }
  return divisors;
};
