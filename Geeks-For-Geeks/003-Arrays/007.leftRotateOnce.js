function leftRotate(arr) {
  const temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = temp;
}

const array = [4, 5, 1, 3, 7, 2, 9];
console.log(array);
leftRotate(array);
console.log(array);
