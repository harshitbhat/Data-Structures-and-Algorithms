function findFirstUnique(arr) {
  const hash = {};
  for (const el of arr) {
    if (hash[el]) hash[el]++;
    else hash[el] = 1;
  }
  for (const el of arr) {
    if (hash[el] === 1) {
      return el;
    }
  }
  return null;
}
