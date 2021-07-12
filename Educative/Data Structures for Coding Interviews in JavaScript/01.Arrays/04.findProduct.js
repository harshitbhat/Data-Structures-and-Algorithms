function findProduct(arr) {
  const product = arr.reduce((acc, el) => acc * el, 1);
  return arr.map((el) => Math.floor(product / el));
}
