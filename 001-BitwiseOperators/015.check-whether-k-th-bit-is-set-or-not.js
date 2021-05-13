const checkKthBit = (n, k) => {
  return ((n >> k) & 1) === 1;
};
