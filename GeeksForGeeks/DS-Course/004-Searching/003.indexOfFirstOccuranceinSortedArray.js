// Approach 1: Linear Search
// Approach 2 (Mine): Binary Search, if element found, move leftwards to find first occurance, linearlly.

function firstOccuranceInSortedRec(arr, start, end, x) {
  // No element present
  if (start > end) return -1;
  // Calculate mid
  let mid = Math.floor((start + end) / 2);
  // Element present
  if (arr[mid] === x) {
    // Check if same element is present in left
    if (arr[mid - 1] === x) {
      // Search again is left SubArray
      return firstOccuranceInSortedRec(arr, start, mid - 1, x);
    }
    return mid;
  }
  // Element present is left half or not
  else if (x < arr[mid])
    return firstOccuranceInSortedRec(arr, start, mid - 1, x);
  // Element present is right half or not
  else return firstOccuranceInSortedRec(arr, mid + 1, end, x);
}

// Iterative

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

const arr1 = [1, 10, 10, 10, 20, 20, 40];
const x1 = 20;

const arr2 = [10, 20, 30];
const x2 = 15;

const arr3 = [15, 15, 15];
const x3 = 15;

console.log(firstOccuranceInSorted(arr1, x1));
console.log(firstOccuranceInSorted(arr2, x2));
console.log(firstOccuranceInSorted(arr3, x3));
