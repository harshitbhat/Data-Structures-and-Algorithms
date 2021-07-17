function firstIndex(arr, testVariable, currentIndex) {
  if (currentIndex > arr.length) {
    return -1;
  }
  if (arr[currentIndex] === testVariable) {
    return currentIndex;
  }
  return firstIndex(arr, testVariable, currentIndex + 1);
}
