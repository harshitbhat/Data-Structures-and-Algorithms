// sort and then single loop

function getMinDiff(arr) {
  arr.sort((a, b) => a - b);
  let ans = Number.POSITIVE_INFINITY;
  for (let i = 0; i < arr.length - 1; i++) {
    ans = Math.min(Math.abs(arr[i] - arr[i + 1]));
  }
}
