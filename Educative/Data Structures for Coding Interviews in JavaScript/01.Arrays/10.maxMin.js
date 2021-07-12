function maxMin(arr) {
  const ans = new Array(arr.length);
  let j = 1;
  for (let i = 0; i < arr.length && j < arr.length; i++) {
    ans[j] = arr[i];
    j += 2;
  }
  j = 0;
  for (let i = arr.length - 1; i >= 0 && j < arr.length; i--) {
    ans[j] = arr[i];
    j += 2;
  }
  return ans;
}

// Better, without arr

function maxMin(arr) {
  var maxIdx = arr.length - 1;
  var minIdx = 0;
  var maxElem = arr[maxIdx] + 1; // store any element that is greater than the maximum element in the array
  for (var i = 0; i < arr.length; i++) {
    // at even indices we will store maximum elements
    if (i % 2 == 0) {
      arr[i] += Math.floor((arr[maxIdx] % maxElem) * maxElem);
      maxIdx -= 1;
    } else {
      // at odd indices we will store minimum elements
      arr[i] += Math.floor((arr[minIdx] % maxElem) * maxElem);
      minIdx += 1;
    }
  }
  // dividing with maxElem to get original values.
  for (var i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(arr[i] / maxElem);
  }
  return arr;
}
