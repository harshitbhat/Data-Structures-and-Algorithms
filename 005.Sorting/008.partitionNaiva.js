// Divide array such that all elements less than the array are in left of it and all greater are to the right

// Time Complexity: O(n)
// Space Complexity: O(n)

function partition(arr, elem) {
  const temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= elem) {
      temp.push(arr[i]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > elem) {
      temp.push(arr[i]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = temp[i];
  }
}

arr = [5, 13, 6, 9, 12, 11, 8, 7];

console.log(arr);
partition(arr, 7);
console.log(arr);
