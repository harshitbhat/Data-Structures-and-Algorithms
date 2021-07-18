function merge(arr, low, mid, high) {
  let i = low;
  let j = mid + 1;
  const merged = [];
  while (i <= mid && j <= high) {
    if (arr[i] <= arr[j]) {
      merged.push(arr[i]);
      i++;
    } else {
      merged.push(arr[j]);
      j++;
    }
  }
  while (i <= mid) {
    merged.push(arr[i]);
    i++;
  }
  while (j <= high) {
    merged.push(arr[j]);
    j++;
  }
  let k = 0;
  for (let i = low; i <= high; i++) {
    arr[i] = merged[k++];
  }
}

function mergeSort(arr, low, high) {
  if (low < high) {
    const mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);
  }
}

function sort(arr, length) {
  mergeSort(arr, 0, length - 1);
}
