// O(m+n) time - Merge two sorted arrays
function merge(a, b) {
  const m = a.length;
  const n = b.length;
  let i = 0;
  let j = 0;
  const c = [];
  while (i < m && j < n) {
    if (a[i] <= b[j]) {
      c.push(a[i]);
      i++;
    } else {
      c.push(b[j]);
      j++;
    }
  }
  while (i < m) {
    c.push(a[i]);
    i++;
  }
  while (j < n) {
    c.push(b[j]);
    j++;
  }
  return c;
}
