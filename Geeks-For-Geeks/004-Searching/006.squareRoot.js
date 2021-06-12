// O(sqrt(n))
function squareRootFloorL(n) {
  let i = 1;
  while (i * i <= n) {
    i++;
  }
  return i - 1;
}

// 0(log(n))
function squareRootB(n) {
  let low = 0;
  let high = n;
  let ans = -1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const mSq = mid * mid;
    if (mSq === n) {
      return mid;
    } else if (mSq > n) high = mid - 1;
    else {
      low = mid + 1;
      ans = mid;
    }
  }
  return ans;
}
