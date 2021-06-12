function josephusProblem(n, k) {
  if (n == 1) {
    return 0;
  }
  return (josephusProblem(n - 1, k) + k) % n;
}

console.log(josephusProblem(5, 3));
