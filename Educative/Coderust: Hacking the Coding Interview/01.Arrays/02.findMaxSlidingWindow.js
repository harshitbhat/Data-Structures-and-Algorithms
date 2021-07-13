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

// Using Dequeue

let ffindMaxSlidingWindow = function (arr, windowSize) {
  let result = [];

  if (arr.length === 0 || windowSize > arr.length) return result;

  let window = [];

  // find max for first window
  for (let i = 0; i < windowSize; i++) {
    while (window.length > 0 && arr[i] >= arr[window[window.length - 1]]) {
      window.pop();
    }
    window.push(i);
  }

  // Put the first result
  result.push(arr[window[0]]);

  for (i = windowSize; i < arr.length; i++) {
    // remove all elements that are smaller than current element from last
    while (window.length > 0 && arr[i] >= arr[window[window.length - 1]]) {
      window.pop();
    }
    // If current front is not in current window, remove it from window
    if (window.length > 0 && window[0] <= i - windowSize) {
      window.shift();
    }
    // Push the current index and put first element of window to resutl
    window.push(i);
    result.push(arr[window[0]]);
  }

  return result;
};
