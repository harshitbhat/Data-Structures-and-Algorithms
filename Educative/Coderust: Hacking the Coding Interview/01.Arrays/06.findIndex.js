let findLowIndex = function (arr, key) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === key) {
      if (mid > low && arr[mid - 1] === arr[mid]) {
        high = mid - 1;
      } else {
        return mid;
      }
    } else if (key < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
};

let findHighIndex = function (arr, key) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === key) {
      if (mid < high && arr[mid + 1] === arr[mid]) {
        low = mid + 1;
      } else {
        return mid;
      }
    } else if (key < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};
