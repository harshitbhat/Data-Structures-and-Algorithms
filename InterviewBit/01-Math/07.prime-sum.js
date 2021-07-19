module.exports = {
  //param A : integer
  //return a array of integers
  primesum: function (n) {
    const isPrime = (n) => {
      if (n <= 1) return false;
      if (n === 2 || n === 3) return true;
      if (n % 2 === 0 || n % 3 === 0) return false;
      let i = 5;
      while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) {
          return false;
        }
        i += 6;
      }
      return true;
    };
    const primesTillN = (n) => {
      const primes = [];
      primes.push(2);
      primes.push(3);
      for (let i = 5; i <= n; i += 2) {
        if (isPrime(i)) {
          primes.push(i);
        }
      }
      return primes;
    };
    const primes = primesTillN(1000);
    for (const key of primes) {
      if (isPrime(n - key)) {
        return [Math.min(key, n - key), Math.max(key, n - key)];
      }
    }
  },
};
