function printBoundary(arr) {
  let ans = '';

  // Corner cases
  // Single Row
  if (arr.length === 1) {
    for (let i = 0; i < arr[0].length; i++) {
      ans += arr[0][i] + ' ';
    }
  } // Single Column
  else if (arr[0].length === 1) {
    for (let i = 0; i < arr.length; i++) {
      ans += arr[i][0] + ' ';
    }
  } else {
    // Top Row
    for (let i = 0; i < arr[0].length; i++) {
      ans += arr[0][i] + ' ';
    }
    // Right Boundary
    for (let i = 1; i < arr.length - 1; i++) {
      ans += arr[i][arr[i].length - 1] + ' ';
    }
    // Bottom Row
    for (let i = arr[arr.length - 1].length - 1; i >= 0; i--) {
      ans += arr[arr.length - 1][i] + ' ';
    }
    // Left boundary
    for (let i = arr.length - 2; i > 0; i--) {
      ans += arr[i][0] + ' ';
    }
  }
  console.log(ans);
}

const arr = [
  [1, 2, 3, 4],
  [8, 7, 6, 5],
  [9, 10, 11, 12],
  [16, 15, 14, 13],
  [17, 18, 19, 20],
];

const arr1 = [[1, 2, 3, 4]];
const arr2 = [[1], [2], [3]];

printBoundary(arr);
