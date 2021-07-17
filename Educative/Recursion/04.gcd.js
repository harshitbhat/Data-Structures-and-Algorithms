function gcd(testVariable1, testVariable2) {
  if (testVariable1 % testVariable2 === 0) {
    return testVariable2;
  }
  return gcd(testVariable2, testVariable1 % testVariable2);
}

// Alternatively

function hcf(a, b) {
  if (a === b) {
    return a;
  } else if (a > b) {
    return hcf(a - b, b);
  } else {
    return hcf(a, b - a);
  }
}
