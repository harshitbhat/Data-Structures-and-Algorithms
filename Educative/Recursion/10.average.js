function average(arr) {
  if (arr.length === 0) {
    return 0;
  }
  if (arr.length === 1) {
    return arr[0];
  }
  return (arr[0] + average(arr.slice(1)) * (arr.length - 1)) / arr.length;
}
