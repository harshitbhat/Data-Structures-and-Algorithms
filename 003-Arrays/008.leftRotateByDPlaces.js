// Method 1 - Left rotate 1 by D times. Time Complexity : O(nd)

// Method 2 - O(n) Time & O(n) space

function leftRotateDTimesS(arr, d) {
  const temp1 = arr.splice(d);
  const temp2 = arr.splice(0, d);
  return [...temp1, ...temp2];
}

const arr = [1, 2, 3, 4, 5];

// console.log(leftRotateDTimesS(arr, 3));

function reverseArray(arr, low, high) {
  while (low < high) {
    [arr[low], arr[high]] = [arr[high], arr[low]];
    low++;
    high--;
  }
}

function leftRotateDTimes(arr, d) {
  const n = arr.length;
  reverseArray(arr, 0, d - 1);
  reverseArray(arr, d, n - 1);
  reverseArray(arr, 0, n - 1);
}

leftRotateDTimes(arr, 3);
console.log(arr);
