module.exports = {
  //param A : array of integers
  //param B : array of integers
  //param C : array of integers
  //return a array of integers
  solve: function (A, B, C) {
    const hash1 = {};
    const hash2 = {};
    const hash3 = {};

    for (const el of A) hash1[el] = true;
    for (const el of B) hash2[el] = true;
    for (const el of C) hash3[el] = true;

    let hash = {};

    for (const el of [...A, ...B, ...C]) {
      if (hash1[el] && (hash2[el] || hash3[el])) hash[el] = true;
      else if (hash2[el] && (hash1[el] || hash3[el])) hash[el] = true;
      else if (hash3[el] && (hash2[el] || hash1[el])) hash[el] = true;
    }

    return Object.keys(hash);
  },
};
