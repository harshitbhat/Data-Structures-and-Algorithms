// Two Traversals
function findSecondMaximum(arr) {
  const maxEl = Math.max(...arr);
  let secondMax = -Infinity;
  for (const el of arr) {
    if (el !== maxEl && el > secondMax) {
      secondMax = el;
    }
  }
  return secondMax;
}

// Single Traversal

function findSecondMaximum(arr) {
  let maxEl = -Infinity;
  let secondMaxEl = -Infinity;
  for (const el of arr) {
    if (el > maxEl) {
      secondMaxEl = maxEl;
      maxEl = el;
    } else if (el > secondMaxEl && el < maxEl) {
      secondMaxEl = el;
    }
  }
  return secondMaxEl;
}
