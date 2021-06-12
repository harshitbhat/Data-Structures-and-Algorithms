function largestElement(arr) {
  let ans = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > ans) {
      ans = arr[i];
    }
  }
  return ans;
}
