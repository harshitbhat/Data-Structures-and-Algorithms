// One way, to have a temporary array, extra space
function removeDuplicates(arr) {
  let res = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] != arr[res - 1]) {
      arr[res] = arr[i];
      res++;
    }
  }

  arr.splice(res);
}

arr = [10, 20, 20, 30, 30, 30, 40, 50, 50, 60];

removeDuplicates(arr);

console.log(arr);
