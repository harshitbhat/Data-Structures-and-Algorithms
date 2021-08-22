module.exports = {
  //param A : array of integers
  //return an integer
  singleNumber: function (A) {
    const hash = new Map();
    for (const el of A) {
      if (hash.has(el)) {
        hash.set(el, hash.get(el) + 1);
      } else {
        hash.set(el, 1);
      }
    }
    for (const [key, val] of hash) {
      if (val === 1) {
        return key;
      }
    }
  },
};
