// Naive Solution: Two loops. swap non zero to right side with every zero found.

// Efficient - Linear Time
function moveZeroes(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      [arr[count], arr[i]] = [arr[i], arr[count]];
      count++;
    }
  }
}

arr = [10, 8, 0, 0, 12, 15, 0, 0, 8];

moveZeroes(arr);

console.log(arr);
