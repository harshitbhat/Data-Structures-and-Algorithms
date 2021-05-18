// Binary Search
function binarySearchIt(arr, x) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === x) return mid;
    else if (x < arr[mid]) end = mid - 1;
    else start = mid + 1;
  }
  return -1;
}

const arr1 = [10, 20, 30, 40, 50, 60];
const x1 = 20;

const arr2 = [5, 15, 25];
const x2 = 25;

const arr3 = [5, 10, 15, 25, 30];
const x3 = 20;

const arr4 = [10, 15];
const x4 = 20;

const arr5 = [10, 15];
const x5 = 5;

const arr6 = [10, 10];
const x6 = 10;

console.log(binarySearchIt(arr1, x1));
console.log(binarySearchIt(arr2, x2));
console.log(binarySearchIt(arr3, x3));
console.log(binarySearchIt(arr4, x4));
console.log(binarySearchIt(arr5, x5));
console.log(binarySearchIt(arr6, x6));
