function printSnake(arr) {
  let ans = '';
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      for (let j = 0; j < arr[i].length; j++) {
        ans += arr[i][j] + ' ';
      }
    } else {
      for (let j = arr[i].length - 1; j >= 0; j--) {
        ans += arr[i][j] + ' ';
      }
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

printSnake(arr);
