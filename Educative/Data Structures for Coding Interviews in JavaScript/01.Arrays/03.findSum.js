function findSum(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === value) {
        return [arr[i], arr[j]];
      }
    }
  }
  return false;
}

function findSum(arr, value) {
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] = i;
  }
  for (const el of arr) {
    if (hash[value - el]) {
      return [el, value - el];
    }
  }
  return false;
}
