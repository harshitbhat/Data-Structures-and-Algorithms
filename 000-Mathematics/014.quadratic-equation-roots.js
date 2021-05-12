const quadraticRoots = (a, b, c) => {
  const D = b ** 2 - 4 * a * c;
  if (D < 0) {
    return [-1];
  }
  const d = Math.sqrt(D);

  const x1 = Math.floor((-1 * b + d) / (2 * a));
  const x2 = Math.floor((-1 * b - d) / (2 * a));

  return [Math.max(x1, x2), Math.min(x1, x2)];
};
