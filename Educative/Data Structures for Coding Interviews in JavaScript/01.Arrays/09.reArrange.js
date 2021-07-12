function reArrange(arr) {
  const neg = [];
  const pos = [];
  for (const el of arr) {
    if (el < 0) neg.push(el);
    else pos.push(el);
  }
  return [...neg, ...pos];
}

function reArrange(arr) {
  let j = 0,
    i = 0;
  while (i < arr.length) {
    if (arr[i] < 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
    i++;
  }
  return arr;
}
