// In increasing order

// Naive - no element on right side is smaller - O(n^2)

function isSortedN(arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        return false;
      }
    }
  }
  return true;
}

// Efficient - O(n)

function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}
