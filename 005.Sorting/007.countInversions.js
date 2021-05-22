// A pair such that i < j and arr[i] > arr[j]

// Sorted Array has 0  inversion
// Reverse sorted array has maximum inversions, n * (n - 1) / 2

// Naive: O(n^2)

function inversionsN(arr) {
  let inv = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) inv++;
    }
  }
  return inv;
}

inversionsN([2, 4, 1, 3, 5]);

/* -------------------------------------------------------------------------- */
/*                              Efficient Method                              */
/* -------------------------------------------------------------------------- */

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
  console.log(`=========LEFT=========`);
  console.log(left);
  console.log(`=========RIGHT=========`);
  console.log(right);
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
  console.log('res = ', res);
  return res;
}

function countInv(arr, l, r) {
  let res = 0;
  if (l < r) {
    const m = Math.floor((l + r) / 2);
    res += countInv(arr, l, m);
    res += countInv(arr, m + 1, r);
    res += countAndMerge(arr, l, m, r);
  }
  return res;
}

const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log('arr = ', arr);
console.log(countInv(arr, 0, arr.length - 1));
