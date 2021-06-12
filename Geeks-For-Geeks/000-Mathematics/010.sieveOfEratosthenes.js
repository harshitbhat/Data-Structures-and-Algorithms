// Naive Approach - check for all

const checkPrime = (n) => {
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

function printPrimesN(n) {
  for (let i = 1; i <= n; i++) {
    if (checkPrime(i)) {
      console.log(i);
    }
  }
}

// Seive - boolen array -
// Time Complexity: O(n log log n)

function seive(n) {
  const primes = new Array(n + 1).fill(true);
  primes[0] = primes[1] = false;
  i = 2;
  while (i * i <= n) {
    if (primes[i]) {
      let j = i * i;
      while (j <= n) {
        primes[j] = false;
        j += i;
      }
    }
    i++;
  }
  for (let i = 0; i <= n; i++) {
    if (primes[i]) {
      console.log(i);
    }
  }
}

seive(20);
