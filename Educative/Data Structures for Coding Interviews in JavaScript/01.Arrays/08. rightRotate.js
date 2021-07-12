function reverse(arr, st, en) {
  let i = st;
  let j = en;
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
}

function rightRotate(arr, n) {
  const l = arr.length;
  reverse(arr, 0, l - n - 1);
  reverse(arr, l - n, l - 1);
  reverse(arr, 0, l - 1);
  return arr;
}
