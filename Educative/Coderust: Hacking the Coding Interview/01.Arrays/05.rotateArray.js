const reverse = (arr, start, end) => {
  let i = start,
    j = end;

  while (i <= j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
};

let rotateArray = function (arr, n) {
  const l = arr.length;
  n = n % l;
  if (n < 0) {
    reverse(arr, 0, n - 1);
    reverse(arr, n, l - 1);
    reverse(arr, 0, l - 1);
  } else {
    reverse(arr, 0, l - n - 1);
    reverse(arr, l - n, l - 1);
    reverse(arr, 0, l - 1);
  }
  return arr;
};
