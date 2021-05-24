// Pivot as last element

function lomutoPartition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

const arr = [10, 80, 30, 90, 40, 50, 70];
lomutoPartition(arr, 0, arr.length - 1);
console.log(arr);

// If given that pivot is not the last element, then swap the given pivot wth last and continue with the lomuto partitioning.
