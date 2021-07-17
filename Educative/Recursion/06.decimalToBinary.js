function decimalToBinary(testVariable) {
  if (testVariable <= 1) {
    return String(testVariable);
  }
  return (
    decimalToBinary(Math.floor(testVariable / 2)) + String(testVariable % 2)
  );
}
