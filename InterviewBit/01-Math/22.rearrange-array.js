module.exports = {
  //param A : array of integers
  //return nothing
  arrange: function (A) {
    const temp = [...A];
    for (let i = 0; i < A.length; i++) {
      A[i] = temp[temp[i]];
    }
  },
};

/* -------------------------------------------------------------------------- */
/*                             Editorial Solution                             */
/* -------------------------------------------------------------------------- */

module.exports = {
  //param a : array of integers
  // return nothing
  arrange: (a) => {
    var len = a.length;
    for (var i = 0; i < len; i++) {
      a[i] = parseInt(a[i]) + (a[a[i]] % len) * len;
    }

    for (var j = 0; j < len; j++) {
      a[j] = Math.floor(a[j] / len);
    }
  },
};
