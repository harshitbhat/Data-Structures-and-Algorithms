// Given as array of arrays - intervals.

const START = 0;
const END = 1;

function mergeIntervals(arr) {
  arr.sort((a, b) => a[START] - b[START]);
  let idx = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[idx][END] > arr[i][START]) {
      arr[idx][START] = Math.min(arr[idx][START], arr[i][END]);
      arr[idx][END] = Math.max(arr[idx][END], arr[i][END]);
    } else {
      idx++;
      arr[idx] = arr[i];
    }
  }
  arr.splice(idx + 1);
  console.log(arr);
}

const arr = [
  [5, 10],
  [3, 15],
  [18, 30],
  [2, 7],
];

mergeIntervals(arr);
