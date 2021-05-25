function rotateBy90(arr) {
  const rotated = [];
  for (let j = arr[0].length - 1; j >= 0; j--) {
    const temp = [];
    for (let i = 0; i < arr.length; i++) {
      temp.push(arr[i][j]);
    }
    rotated.push(temp);
  }
  console.log(rotated);
}

const arr = [
  [1, 2, 3, 4],
  [8, 7, 6, 5],
  [9, 10, 11, 12],
  [16, 15, 14, 13],
  [17, 18, 19, 20],
];

rotateBy90(arr);
