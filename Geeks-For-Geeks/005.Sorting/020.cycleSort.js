// WOrst O(n^2)
// minimum memory writes
// used when asked about minimum swaps to sort the array

// for distinct elements
function cycleSort(arr) {
  const n = arr.length;
  for (let cs = 0; cs < n - 1; cs++) {
    let item = arr[cs];
    let pos = cs;
    for (let i = cs + 1; i < n; i++) {
      if (arr[i] < item) {
        pos++;
      }
    }
    [item, arr[pos]] = [arr[pos], item];
    while (pos != cs) {
      pos = cs;
      for (let i = cs + 1; i < n; i++) {
        if (arr[i] < item) {
          pos++;
        }
      }
      [item, arr[pos]] = [arr[pos], item];
    }
    console.log(arr);
  }
}

const arr = [20, 40, 50, 10, 30];
cycleSort(arr);
