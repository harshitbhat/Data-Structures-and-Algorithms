//  Naive Approach, check for every number till n,
//  Time Complexity: O(n)

function checkPrimeN(n) {
  if (n == 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

// console.log(checkPrimeN(23));

// Efficient approach - Time Complexity: O(sqrt(n))

function checkPrimesEff(n) {
  if (n == 1) {
    return false;
  }
  for (let i = 0; i <= parseInt(Math.sqrt(n)); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

// Most efficient
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
  while (i * i <= n) {
    if (n % i == 0 || n % (i + 2) == 0) {
      return false;
    }
    i += 6;
  }
  return true;
}

console.log(checkPrimes(23));
