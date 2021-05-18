function binarySearchRec(arr, start, end, x) {
  if (start > end) return -1;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === x) return mid;
  else if (x < arr[mid]) return binarySearchRec(arr, start, mid - 1, x);
  else return binarySearchRec(arr, mid + 1, end, x);
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

console.log(binarySearchRec(arr1, 0, arr1.length - 1, x1));
console.log(binarySearchRec(arr2, 0, arr2.length - 1, x2));
console.log(binarySearchRec(arr3, 0, arr3.length - 1, x3));
console.log(binarySearchRec(arr4, 0, arr4.length - 1, x4));
console.log(binarySearchRec(arr5, 0, arr5.length - 1, x5));
console.log(binarySearchRec(arr6, 0, arr6.length - 1, x6));
