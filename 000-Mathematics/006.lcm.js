// Naive Approach - Time Complexity: O(a*b - max(a,b))

function lcmN(a, b) {
  let res = Math.max(a, b);
  while (true) {
    if (res % a == 0 && res % b == 0) {
      break;
    }
    res++;
  }
  return res;
}

// console.log(lcmN(8, 20));

// Efficient Solution

function gcd(a, b) {
  if (b == 0) {
    return a;
  }
  return gcd(b, a % b);
}

function lcm(a, b) {
  return parseInt((a * b) / gcd(a, b));
}

console.log(lcm(8, 20));
