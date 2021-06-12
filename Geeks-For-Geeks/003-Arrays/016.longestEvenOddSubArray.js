// Naive - O(n^2)

function alternateEvenOddN(arr) {
  let res = 1;
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let cur = 1;
    for (j = i + 1; j < n; j++) {
      if (
        (arr[j] % 2 === 0 && arr[j - 1] % 2 !== 0) ||
        (arr[j] % 2 !== 0 && arr[j - 1] % 2 === 0)
      ) {
        cur++;
      } else {
        break;
      }
    }
    res = Math.max(res, cur);
  }
  return res;
}

// O(n) solution

function alternateEvenOdd(arr) {
  let res = 1;
  let cur = 1;
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    if (
      (arr[i] % 2 === 0 && arr[i - 1] % 2 !== 0) ||
      (arr[i] % 2 !== 0 && arr[i - 1] % 2 === 0)
    ) {
      cur++;
      res = Math.max(cur, res);
    } else {
      cur = 1;
    }
  }
  return res;
}

const arr = [5, 10, 20, 6, 3, 8];

console.log(alternateEvenOdd(arr));
