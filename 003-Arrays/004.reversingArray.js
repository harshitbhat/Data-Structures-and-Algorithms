function reverseArray(arr) {
  low = 0;
  high = arr.length - 1;
  while (low < high) {
    [arr[low], arr[high]] = [arr[high], arr[low]];
    low++;
    high--;
  }
}

arr = [4, 1, 6, 8, 2];
console.log(arr);
reverseArray(arr);
console.log(arr);
