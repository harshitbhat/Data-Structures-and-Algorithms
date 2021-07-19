// Aort and return arr[k-1] -> O(nlogn)

// Using Lomuto Partition - Average O(n)
// As it keeps the element at its place in sorted arrays.

function lomutoPartition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}
// Quick Select
function kthLargest(arr, k) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let p = lomutoPartition(arr, low, high);
    if (p === k - 1) {
      return p;
    } else if (p > k - 1) {
      high = p - 1;
    } else {
      low = p + 1;
    }
  }
  return -1;
}
