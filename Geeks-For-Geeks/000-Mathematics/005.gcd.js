// Naive Approach
// Time Complexity: O(min(a,b)) ~ O(n)

function gcdN(a, b) {
  let res = Math.min(a, b);
  while (res > 0) {
    if (a % res == 0 && b % res == 0) {
      break;
    }
    res--;
  }
  return res;
}

// Euclid ALgorithm

function gcdE(a, b) {
  while (a != b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
}

// Optimised implementation - to prevent repeated substraction, we use %
// Time Complexity: O(log(min(a,b)))
function gcd(a, b) {
  if (b == 0) {
    return a;
  }
  return gcd(b, a % b);
}
