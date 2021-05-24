function partition(arr, low, high) {
  const pivot = arr[low];
  let i = low - 1;
  let j = high + 1;
  while (true) {
    do {
      i++;
    } while (arr[i] < pivot);
    do {
      j--;
    } while (arr[j] > pivot);
    if (i > j) return;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return i;
}

function quicksort(arr, low, high) {
  if (low < high) {
    const p = partition(arr, low, high);
    quickSort(arr, low, p - 1);
    quickSort(arr, p + 1, high);
  }
}
