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

const arr1 = [1, 10, 10, 10, 20, 20, 40];
const x1 = 20;

const arr2 = [10, 20, 30];
const x2 = 15;

const arr3 = [15, 15, 15];
const x3 = 15;

console.log(lastOccuranceInSorted(arr1, x1));
console.log(lastOccuranceInSorted(arr2, x2));
console.log(lastOccuranceInSorted(arr3, x3));
