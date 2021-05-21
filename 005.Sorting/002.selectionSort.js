// Time Complexity: O(n^2)
// Not stable algorithm - changes the placement of similar elements
// Less memory writes
// In Place

function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let idx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[idx]) {
        idx = j;
      }
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
  console.log(arr);
}

selectionSort([4, 2, 7, 1, 8, -9]);
