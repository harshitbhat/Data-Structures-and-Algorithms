function print1toN(n) {
  if (n === 0) {
    return;
  }
  print1toN(n - 1);
  process.stdout.write(n + ' ');
}

print1toN(10);
console.log();
