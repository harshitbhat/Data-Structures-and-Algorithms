const countSingleOccurance = (arr) => arr.reduce((ans, cur) => ans ^ cur, 0);

arr = [2, 2, 4, 5, 6, 5, 4, 6, 7];

console.log(countSingleOccurance(arr));
