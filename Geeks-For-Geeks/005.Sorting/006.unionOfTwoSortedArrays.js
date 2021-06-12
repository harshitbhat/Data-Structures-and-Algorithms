function union(a, b) {
  const m = a.length;
  const n = b.length;
  let i = 0;
  let j = 0;
  while (i < m && j < n) {
    if (i > 0 && a[i] === a[i - 1]) {
      i++;
      continue;
    }
    if (j > 0 && b[j] === b[j - 1]) {
      j++;
      continue;
    }
    if (a[i] < b[j]) {
      console.log(a[i]);
      i++;
    } else if (a[i] > b[j]) {
      console.log(b[j]);
      j++;
    } else {
      console.log(a[i]);
      i++;
      j++;
    }
  }
  while (i < m) {
    if (i > 0 && a[i] == a[i - 1]) {
      i++;
      continue;
    }
    console.log(a[i]);
    i++;
  }
  while (j < n) {
    if (j > 0 && b[j] === b[j - 1]) {
      j++;
      continue;
    }
    console.log(b[j]);
    j++;
  }
}

const a = [2, 3, 3, 3, 3, 4, 4, 99];
const b = [3, 4, 4, 8, 9, 10, 10, 10, 10, 10];

union(a, b);
