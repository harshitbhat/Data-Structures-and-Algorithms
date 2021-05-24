function hoarsePartition(arr, low, high) {
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

const arr = [5, 3, 8, 4, 2, 7, 2, 10];
hoarsePartition(arr, 0, arr.length - 1);
console.log(arr);
