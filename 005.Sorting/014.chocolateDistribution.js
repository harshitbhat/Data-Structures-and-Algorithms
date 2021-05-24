function distribute(arr, m) {
  if (m > n) {
    return -1;
  }
  arr.sort((a, b) => a - b);
  let res = arr[m - 1] - arr[0];
  for (let i = 1; i + m - 1 < n; i++) {
    res = Math.min(res, arr[i + m - 1] - arr[i]);
  }
  return res;
}
