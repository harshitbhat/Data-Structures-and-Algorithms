function firstOccuranceInSorted(arr, x) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === x) {
      if (arr[mid - 1] === x && mid >= 1) {
        end = mid - 1;
      } else {
        return mid;
      }
    } else if (x < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

function lastOccuranceInSorted(arr, x) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === x) {
      if (arr[mid + 1] === x && mid <= end) {
        start = mid + 1;
      } else {
        return mid;
      }
    } else if (x < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

function countOccurances(arr, x) {
  const firstOcc = firstOccuranceInSorted(arr, x);
  if (firstOcc === -1) return 0;
  const secondOcc = lastOccuranceInSorted(arr, x);
  return secondOcc - firstOcc + 1;
}
