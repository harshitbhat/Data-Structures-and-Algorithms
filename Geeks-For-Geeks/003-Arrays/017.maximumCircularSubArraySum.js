// Naive, O(n^2)
function maxCircularSubArraySumN(arr) {
  const n = arr.length;
  let res = arr[0];
  for (let i = 0; i < n; i++) {
    let cur_max = arr[i];
    let cur_sum = arr[i];
    for (let j = 1; j < n; j++) {
      let idx = (i + j) % n;
      cur_sum += arr[idx];
      cur_max = Math.max(cur_max, cur_sum);
    }
    res = Math.max(res, cur_max);
  }
  console.log(res);
  return res;
}

// Efficient

function maxSubArraySum(arr) {
  const n = arr.length;
  let maxEnding = arr[0];
  let res = arr[0];
  for (let i = 1; i < arr.length; i++) {
    maxEnding = Math.max(maxEnding + arr[i], arr[i]);
    res = Math.max(res, maxEnding);
  }

  return res;
}

function maxCircularSubArraySum(arr) {
  const normalMax = maxSubArraySum(arr);
  if (normalMax < 0) {
    return normalMax;
  }
  n = arr.length;
  let arrSum = 0;
  for (let i = 0; i < n; i++) {
    arrSum += arr[i];
    arr[i] = -arr[i];
  }
  const circularMax = arrSum + maxSubArraySum(arr);
  console.log(Math.max(normalMax, circularMax));
  return Math.max(normalMax, circularMax);
}

const arr1 = [10, 5, -5]; // 15
const arr2 = [5, -2, 3, 4]; // 12
const arr3 = [2, 3, -4]; // 5
const arr4 = [8, -4, 3, -5, 4]; // 12
const arr5 = [-3, 4, 6, -2]; // 10
const arr6 = [-8, 7, 6]; // 13
const arr7 = [3, -4, 5, 6, -8, 7]; // 17

maxCircularSubArraySum(arr1);
maxCircularSubArraySum(arr2);
maxCircularSubArraySum(arr3);
maxCircularSubArraySum(arr4);
maxCircularSubArraySum(arr5);
maxCircularSubArraySum(arr6);
maxCircularSubArraySum(arr7);
