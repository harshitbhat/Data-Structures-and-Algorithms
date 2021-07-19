// Naive: temporary array and multiple traversal

// Efficent: Dutch National Flag algorithm
// - All pivots to go together - then partitioning

// Sorting array of 0s 1s and 2s
function sortThree(arr) {
  const n = arr.length;
  let low = 0;
  let mid = 0;
  let high = n - 1;
  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      [arr[mid], a[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
}
