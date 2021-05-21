// Time Complexity: O(n^2)

// Further Optimistaion, keep a variable swapped
// If the variable remains false, i.e no swapp takes place, this means that array is sorted and no need to check further.

// Bubble Sort is stable. doesn't changes the order of elements having same value.

function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (swapped === false) break;
  }
  console.log(arr);
}

bubbleSort([2, 10, 8, 7]);
