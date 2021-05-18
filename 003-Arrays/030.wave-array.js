class Solution {
  //Function to sort the array into a wave-like array.
  convertToWave(arr, n) {
    // code here
    const changeOrder = (arr, st, end) => {
      [arr[st], arr[st + 1]] = [arr[st + 1], arr[st]];
      [arr[end - 1], arr[end]] = [arr[end], arr[end - 1]];
    };
    for (let i = 0; i < n; i += 4) {
      if (i + 4 < n) {
        changeOrder(arr, i, i + 4 - 1);
      } else {
        if (i == n - 1) {
          continue;
        } else if (i + 1 == n - 1 || i + 2 == n - 1) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        } else {
          changeOrder(arr, i, n - 1);
        }
      }
    }
  }
}
