// Naive

function getWaterN(arr) {
  let water = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    let lMax = arr[i];
    for (let j = 0; j < i; j++) {
      lMax = Math.max(lMax, arr[j]);
    }
    let rMax = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      rMax = Math.max(rMax, arr[j]);
    }
    water += Math.min(lMax, rMax) - arr[i];
  }
  return water;
}

function getWater(arr) {
  let water = 0;
  let n = arr.length;
  const lMax = new Array(n).fill(0);
  lMax[0] = arr[0];
  for (let i = 1; i < n; i++) {
    lMax[i] = Math.max(arr[i], lMax[i - 1]);
  }
  const rMax = new Array(n).fill(0);
  rMax[n - 1] = arr[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rMax[i] = Math.max(arr[i], lMax[i + 1]);
  }
  for (let i = 0; i < n; i++) {
    water += Math.min(lMax[i], rMax[i]) - arr[i];
  }
  return water;
}

const arr = [3, 0, 1, 2, 5];

console.log(getWater(arr));
