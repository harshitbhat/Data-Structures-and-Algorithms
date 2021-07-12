let findMaxSlidingWindow = function (arr, window_size) {
  var result = [];
  //Write your code

  let prevMax = Math.max(...arr.slice(0, window_size));
  result.push(prevMax);

  for (let i = 1; i <= arr.length - window_size; i++) {
    if (arr[i + window_size - 1] > prevMax) {
      prevMax = arr[i + window_size - 1];
    } else {
      prevMax = Math.max(...arr.slice(i, i + window_size));
    }
    result.push(prevMax);
  }
  return result;
};
