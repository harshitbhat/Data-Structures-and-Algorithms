const isSparse = (n) => {
  let prev = 0;
  while (n) {
    let t = n % 2;
    if (prev == 1 && t == 1) {
      return false;
    }
    prev = t;
    n = parseInt(n / 2);
  }
  return true;
};
