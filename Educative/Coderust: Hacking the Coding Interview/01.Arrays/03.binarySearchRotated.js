// Binary search only with modification
// We will be rejecting one half of the array in every iteration and continue normal binary Search in rest

// Recursive

function binarySearch(arr, low, high, key) {
  if (low > high) {
    return -1;
  }

  let mid = Math.floor((low + high) / 2);
  if (arr[mid] === key) {
    return mid;
  }
  // means left half is sorted
  if (arr[low] <= arr[mid] && key <= arr[mid] && key >= arr[low]) {
    return binarySearch(arr, low, mid - 1, key);
  }
  // if right half is sorted
  else if (arr[mid] <= arr[high] && key <= arr[high] && key >= arr[mid]) {
    return binarySearch(arr, mid + 1, high, key);
  } else if (arr[high] <= arr[mid]) {
    return binarySearch(arr, mid + 1, high, key);
  } else if (arr[low] >= arr[mid]) {
    return binarySearch(arr, low, mid - 1, key);
  }
  return -1;
}

let binarySearchRotated = function (arr, key) {
  return binarySearch(arr, 0, arr.length - 1, key);
};

binarySearchRotated([4, 5, 6, 1, 2, 3], 3);
