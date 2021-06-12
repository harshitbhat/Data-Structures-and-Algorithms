// Segregate positive and negatives in a array

// Naive - take a temporary array, fill satisfying the conditions and then copy
// O(n) Space, O(n) Time, 3 traversals.

// Efficient - 2 Pointers, partitioning.

function seperatePosNeg(arr) {
  const n = arr.length;
  let i = 0;
  let j = n - 1;
  while (true) {
    do {
      i++;
    } while (arr[i] < 0);
    do {
      j--;
    } while (arr[j] >= 0);
    if (i >= j) return;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
