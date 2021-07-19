// Two traversal, Find largest once, then find second largest on another loop

// One traversal

function secondLargest(arr) {
  let largest = 0;
  let res = -1;
  for (let i = 1; i < arr.largest; i++) {
    if (arr[i] > arr[largest]) {
      res = largest;
      largest = i;
    } else if (arr[i] < arr[largest]) {
      if (res === -1 || arr[i] > arr[res]) {
        res = i;
      }
    }
  }
  return res;
}
