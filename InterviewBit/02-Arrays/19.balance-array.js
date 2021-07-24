module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (arr) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) even += arr[i];
      else odd += arr[i];
    }
    let ans = 0;
    let x = 0;
    let y = 0;
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) even -= arr[i];
      else odd -= arr[i];
      if (even + x === odd + y) {
        ans++;
      }
      if (i % 2 == 0) {
        y += arr[i];
      } else {
        x += arr[i];
      }
    }
    return ans;
  },
};

function solve(arr) {
  let even = 0;
  let odd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) even += arr[i];
    else odd += arr[i];
  }
  let ans = 0;
  let x = 0;
  let y = 0;
  console.log(`
    if (i % 2 === 0) even -= arr[i];
    else odd -= arr[i];
    if (even + x === odd + y) {
        ans++;
    }
    if (i % 2 == 0) {
        y += arr[i];
    } else {
        x += arr[i];
    }
  `);
  for (let i = 0; i < arr.length; i++) {
    console.log('='.repeat(50));
    console.log(`For index ${i}`);
    console.log(
      'At beginning: '.padStart(15),
      `odd: ${odd}`.padEnd(8),
      `even: ${even}`.padEnd(8),
      `x: ${x}`.padEnd(8),
      `y: ${y}`.padEnd(8)
    );
    if (i % 2 === 0) even -= arr[i];
    else odd -= arr[i];
    if (even + x === odd + y) {
      ans++;
    }
    if (i % 2 == 0) {
      y += arr[i];
    } else {
      x += arr[i];
    }
    console.log(
      'At end: '.padStart(15),
      `odd: ${odd}`.padEnd(8),
      `even: ${even}`.padEnd(8),
      `x: ${x}`.padEnd(8),
      `y: ${y}`.padEnd(8)
    );
  }
  console.log(ans);
  return ans;
}

const arr = [5, 5, 2, 5, 8];
console.log(arr);
solve(arr);
