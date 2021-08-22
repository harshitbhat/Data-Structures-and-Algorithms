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

/* -------------------------------------------------------------------------- */
/*                              Another Solutioň                             */
/* -------------------------------------------------------------------------- */

module.exports = {
  //param A : array of integers
  //return an integer
  singleNumber: function (A) {
    let ans = 0;
    let x, sum;
    for (let i = 0; i < 32; i++) {
      sum = 0;
      x = 1 << i;

      for (const el of A) {
        if (el & x) sum++;
      }

      if (sum % 3 !== 0) {
        ans |= x;
      }
    }
    return ans;
  },
};
