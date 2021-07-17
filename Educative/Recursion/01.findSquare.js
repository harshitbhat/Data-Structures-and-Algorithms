function findSquare(testVariable) {
  if (testVariable === 0) {
    return 0;
  }
  if (testVariable === 1) {
    return 1;
  }
  return 2 * testVariable - 1 + findSquare(testVariable - 1);
}
