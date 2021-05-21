// O(n^2)
// Inplace
// Stable
// O(n) is best case - already sorted
// Most efficient for small sized arrays

function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;
    while (key < arr[j] && j >= 0) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  console.log(arr);
}

insertionSort([19, 14, 5, 78, -1]);
