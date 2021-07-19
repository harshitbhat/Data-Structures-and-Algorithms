// Majority Element - Appears more than n/2 times

// Naive: check for all elements and find the count - O(n^2)
// Some are cancelling others and the one to which the index lies in the end gives the answer.
function findMajority(arr) {
  const n = arr.length;
  let res = 0;
  let count = 1;
  for (let i = 1; i < n; i++) {
    if (arr[res] === arr[i]) {
      count++;
    } else {
      count--;
    }
    if (count === 0) {
      count = 1;
      res = i;
    }
  }
  count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[res] === arr[i]) {
      count++;
    }
  }
  if (count <= n / 2) {
    res = -1;
  }
  return res;
}
