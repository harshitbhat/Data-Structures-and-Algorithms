// Naive, 2 nested for loops, O(n^2)

// Efficient, use set, extra space.

function countDistinct(arr) {
  const mySet = new Set(arr);
  return mySet.size;
}

const arr = [1, 2, 2, 3, 3, 4, 4, 1, 1, 6];
console.log(countDistinct(arr));
