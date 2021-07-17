function sumDigits(testVariable) {
  if (testVariable.length === 0) {
    return 0;
  }
  return parseInt(testVariable[0]) + sumDigits(testVariable.substr(1));
}
