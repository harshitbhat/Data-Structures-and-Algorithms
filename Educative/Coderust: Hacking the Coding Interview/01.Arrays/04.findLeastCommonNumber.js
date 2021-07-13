let findLeastCommonNumber = function (a, b, c) {
  let i = 0,
    j = 0,
    k = 0;

  while (i < a.length && j < b.length && k < c.length) {
    //console.log(`a[i] = ${a[i]} | b[j] = ${b[j]} | c[k] = ${c[k]}`);
    if (a[i] === b[j] && b[j] === c[k]) {
      return a[i];
    }
    if (a[i] < b[j] || a[i] < c[k]) {
      i++;
      continue;
    }
    if (b[j] < a[i] || b[j] < c[k]) {
      j++;
      continue;
    }
    if (c[k] < a[i] || c[k] < b[j]) {
      k++;
    }
  }

  return -1;
};

const ans = findLeastCommonNumber(
  [1, 4, 6, 7, 8, 10, 14],
  [1, 4, 5, 6, 7, 8, 50],
  [0, 6, 7, 8, 10, 25, 30, 40]
);

console.log(ans);
