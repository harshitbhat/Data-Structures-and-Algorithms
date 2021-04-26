function checkPrimes(n) {
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
  while (i * i < n) {
    if (n % i == 0 || n % (i + 2) == 0) {
      return false;
    }
    i += 6;
  }
  return true;
}

function primeFactorsN(n) {
  const primeFactors = [];
  for (let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
    if (checkPrimes(i) && n % i == 0) {
      while (n % i == 0) {
        primeFactors.push(i);
        n /= i;
      }
    }
  }
  if (n != 1) {
    primeFactors.push(n);
  }
  console.log(primeFactors);
}

primeFactorsN(96);
