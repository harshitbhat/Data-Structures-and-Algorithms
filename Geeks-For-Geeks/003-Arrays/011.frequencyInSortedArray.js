function frequency(arr) {
  const ans = {};
  let cur = arr[0];
  let curCt = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === cur) {
      curCt++;
    } else {
      ans[cur] = curCt;
      cur = arr[i];
      curCt = 1;
    }
  }
  ans[cur] = curCt;
  console.log(ans);
  return ans;
}

const arr1 = [10, 10, 10, 25, 30, 30, 40];
const arr2 = [10, 10, 10];
const arr3 = [10, 20, 30];

frequency(arr1);
frequency(arr2);
frequency(arr3);
