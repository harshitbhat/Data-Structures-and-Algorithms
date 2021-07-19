function transpose(arr) {
  const tr = [];
  for (j = 0; j < arr[0].length; j++) {
    const col = [];
    for (let i = 0; i < arr.length; i++) {
      col.push(arr[i][j]);
    }
    tr.push(col);
  }
  console.log(tr);
}

const arr = [
  [1, 2, 3, 4],
  [8, 7, 6, 5],
  [9, 10, 11, 12],
  [16, 15, 14, 13],
  [17, 18, 19, 20],
];

console.log(arr);
transpose(arr);
