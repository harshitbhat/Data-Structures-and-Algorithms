// Iterative

let binarySearch = function (a, key) {
  //TODO: Write - Your - Code
  let low = 0;
  let high = a.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (a[mid] === key) return mid;
    else if (a[mid] < key) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
};
