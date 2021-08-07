function countAndMerge(arr, l, m, r) {
  const n1 = m - l + 1;
  const n2 = r - m;
  const left = new Array(n1);
  const right = new Array(n2);
  for (let i = 0; i < n1; i++) {
    left[i] = arr[l + i];
  }
  for (let j = 0; j < n2; j++) {
    right[j] = arr[m + j + 1];
  }
  let res = 0,
    i = 0,
    j = 0,
    k = l;

  while (i < n1 && j < n2) {
    if (left[i] <= right[j]) arr[k++] = left[i++];
    else {
      arr[k++] = right[j++];
      res += n1 - i;
    }
  }

  while (i < n1) arr[k++] = left[i++];
  while (j < n2) arr[k++] = right[j++];

  return res;
}

const solve = (arr, low, high) => {
  let ct = 0;
  if (low < high) {
    let mid = Math.floor((low + high) / 2);
    ct += solve(arr, low, mid);
    ct += solve(arr, mid + 1, high);
    ct += countAndMerge(arr, low, mid, high);
  }
  return ct;
};

module.exports = {
  //param A : array of integers
  //return an integer
  countInversions: function (A) {
    return solve(A, 0, A.length - 1);
  },
};
