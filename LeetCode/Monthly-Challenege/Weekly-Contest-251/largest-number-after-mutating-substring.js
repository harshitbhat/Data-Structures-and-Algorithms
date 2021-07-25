/**
 * @param {string} num
 * @param {number[]} change
 * @return {string}
 */
var maximumNumber = function (num, change) {
  num = num.split('');
  let current = parseInt(num[0]);
  let toReplace = change[current];

  let start, end;

  if (current < toReplace) {
    start = 0;
    end = 0;
    for (let i = 1; i < num.length; i++) {
      current = parseInt(num[i]);
      toReplace = change[current];
      if (current <= toReplace) {
        end = i;
      } else {
        break;
      }
    }
  } else {
    let i = 1;
    while (i < num.length) {
      current = parseInt(num[i]);
      toReplace = change[current];
      if (toReplace > current) {
        start = i;
        end = i;
        break;
      }
      i++;
    }
    for (let j = start; j < num.length; j++) {
      current = parseInt(num[j]);
      toReplace = change[current];
      if (current <= toReplace) {
        end = j;
      } else {
        break;
      }
    }
  }

  for (let i = start; i <= end; i++) {
    num[i] = change[parseInt(num[i])];
  }
  //   console.log(start, end, num);
  return num.join('');
};

console.log(maximumNumber('214010', [6, 7, 9, 7, 4, 0, 3, 4, 4, 7]));

/*

"214010"
[6,7,9,7,4,0,3,4,4,7]


*/
