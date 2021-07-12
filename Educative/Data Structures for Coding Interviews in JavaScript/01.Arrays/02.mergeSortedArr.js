function mergeArrays(arr1, arr2) {
  const ans = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      ans.push(arr1[i]);
      i++;
    } else {
      ans.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) ans.push(arr1[i++]);
  while (j < arr2.length) ans.push(arr2[j++]);

  return ans;
}
