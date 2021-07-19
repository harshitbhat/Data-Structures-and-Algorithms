// TIme Complexoty: O(n log n)
// Space Complexity: O(n)
// Best for linked list, O(1) auxillary space

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
  if (high > low) {
    const mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);
  }
}

const arr = [8, 5, 2, 11, 4];
console.log(arr);
mergeSort(arr, 0, arr.length - 1);
console.log(arr);

// const arr = [1, 20, 30, 49, 1, 30, 60];
// merge(arr, 0, 3, 6);
// console.log(arr);
