function printPascal(n) {
  if (n === 0) {
    return [1];
  }
  let line = [1];
  const previousLine = printPascal(n - 1);
  for (let i = 0; i < previousLine.length - 1; i++) {
    line.push(previousLine[i] + previousLine[i + 1]);
  }
  line.push(1);
  return line;
}
