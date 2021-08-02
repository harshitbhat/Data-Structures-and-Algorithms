module.exports = {
  //param A : array of integers
  //param B : integer
  //return a array of integers
  // solution by @harshitbhat
  dNums: function (A, B) {
    const ans = [];
    if (B > A.length) {
      return ans;
    }
    let windowStart = 0;
    const hash = {};
    for (let windowEnd = 0; windowEnd < A.length; windowEnd++) {
      if (hash[A[windowEnd]]) {
        hash[A[windowEnd]]++;
      } else {
        hash[A[windowEnd]] = 1;
      }

      if (windowEnd >= B - 1) {
        ans.push(Object.keys(hash).length);
        hash[A[windowStart]]--;
        if (hash[A[windowStart]] === 0) {
          delete hash[A[windowStart]];
        }
        windowStart++;
      }
    }
    return ans;
  },
};

// SOme trivial case got wrong, should not have
// Editorial solution
module.exports = {
  //param A : array of integers
  //param B : integer
  //return a array of integers
  dNums: function (A, B) {
    let map = {
      size: 0,
    };
    let result = [];

    if (A.length < B) return result;
    for (let i = 0; i < B; i++) {
      if (!(A[i] in map)) {
        map[A[i]] = 1;
        map.size += 1;
      } else map[A[i]] += 1;
    }
    result.push(map.size);

    function count(r) {
      if (map[A[r - B]] > 1) map[A[r - B]] -= 1;
      else {
        delete map[A[r - B]];
        map.size -= 1;
      }

      if (!(A[r] in map)) {
        map[A[r]] = 1;
        map.size += 1;
      } else map[A[r]] += 1;

      return map.size;
    }

    let l = 1;

    while (l + B <= A.length) {
      result.push(count(l + B - 1));
      l += 1;
    }

    return result;
  },
};
