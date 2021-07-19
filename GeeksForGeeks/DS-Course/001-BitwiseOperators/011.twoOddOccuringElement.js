// Naive - O(n^2) - Two for loops and calculate count for every element.

/*
Efficient -  O(n)
- Take XOR of all elements, will give XOR of two odd appearing numbers
- consider a set bit and divide the array into two groups, ad bits should be different
- Take XOR of all in two groups and we get the result.
*/

const twoOddOccuring = (arr) => {
  let xor = 0;
  let res1 = 0;
  let res2 = 0;

  for (const elem of arr) {
    xor = xor ^ elem;
  }

  const sn = xor & ~(xor - 1);

  for (const el of arr) {
    if ((el & sn) != 0) {
      res1 = res1 ^ el;
    } else {
      res2 = res2 ^ el;
    }
  }
  return [res1, res2];
};

console.log(twoOddOccuring([3, 4, 3, 4, 8, 4, 4, 32, 7, 7]));
