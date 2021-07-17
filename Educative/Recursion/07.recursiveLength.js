function recursiveLength(testVariable) {
  if (testVariable.length === 0) {
    return 0;
  }
  return 1 + recursiveLength(testVariable.substr(1));
}
