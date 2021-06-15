/**
 * @param {string} s
 * @param {string} p
 * @param {number[]} removable
 * @return {number}
 */

const isSubsequence = (a, b, doNot) => {
  const len1 = a.length;
  const len2 = b.length;

  let i = 0;
  let j = 0;

  while (i < len1 && j < len2) {
    if (doNot.includes(i)) {
      i++;
      continue;
    }
    if (a[i] === b[j]) {
      j++;
    }
    i++;
  }
  return j === len2;
};

// var maximumRemovals = function (s, p, removable) {
//   let words = [];
//   let first = '';
//   for (let i = 0; i < s.length; i++) {
//     if (i !== removable[0]) {
//       first += s[i];
//     } else {
//       first += '-';
//     }
//   }
//   words.push(first);
//   for (let i = 1; i < removable.length; i++) {
//     let temp = '';
//     for (let j = 0; j < words[i - 1].length; j++) {
//       if (j !== removable[i]) {
//         temp += words[i - 1][j];
//       } else {
//         temp += '-';
//       }
//     }
//     words.push(temp);
//   }

//   let ans = 0;
//   for (let i = 0; i < words.length; i++) {
//     if (isSubsequence(words[i], p)) {
//       ans++;
//     } else {
//       break;
//     }
//   }
//   return ans;
// };

var maximumRemovals = function (s, p, removable) {
  let ans = 0;
  for (let i = 0; i < removable.length; i++) {
    if (isSubsequence(s, p, removable.slice(0, i + 1))) {
      ans++;
    } else {
      break;
    }
  }
  return ans;
};

maximumRemovals('abcab', 'abc', [0, 1, 2, 3, 4]);
