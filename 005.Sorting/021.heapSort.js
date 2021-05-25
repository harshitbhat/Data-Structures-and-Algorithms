function heapify(arr, n, i) {
  let largest = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;
  if (l < n && arr[l] > arr[largest]) largest = l;
  if (r < n && arr[r] > arr[largest]) largest = r;
  if (largest != i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, largest);
  }
}

function buildHeap(arr, n) {
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, i);
  }
}

function heapSort(arr, n) {
  buildHeap(arr, n);

  for (let i = arr.length - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
}

const arr = [12, 11, 13, 5, 6, 7];
heapSort(arr, arr.length);
console.log(arr);
