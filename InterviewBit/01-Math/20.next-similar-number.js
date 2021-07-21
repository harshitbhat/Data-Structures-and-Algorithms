// const isReverseSorted = (str) => {
//   if (str.slice(1) === '0'.repeat(str.length - 1)) return false;
//   if (str.length <= 1) return false;
//   const l = str.length;
//   for (let i = 1; i < l; i++) {
//     if (str[i] > str[i - 1]) return false;
//   }
//   return true;
// };

// const isSorted = (str) => {
//   for (let i = 1; i < str.length; i++) {
//     if (str[i] < str[i - 1]) {
//       return false;
//     }
//   }
//   return true;
// };

// const justGreaterElement = (str, num) => {
//   str = str.sort();
//   for (const ch of str) {
//     if (ch > num) {
//       return ch;
//     }
//   }
//   return -1;
// };

// module.exports = {
//   //param A : string
//   //return a strings
//   solve: function (str) {
//     if (str.length === 1) return -1;
//     if (isReverseSorted(str)) return -1;
//     if (isSorted(str)) {
//       return str[str.length - 1] + str.slice(1, str.length - 1) + str[0];
//     }
//     str = str.split('');
//     for (let i = str.length - 1; i >= 0; i--) {
//       let isSmall = false;
//       let idx = -1;
//       for (let j = i - 1; j >= 0; j--) {
//         if (str[j] < str[i]) {
//           isSmall = true;
//           idx = j;
//           break;
//         }
//       }
//       if (!isSmall) return -1;
//       const greatest = justGreaterElement(str.slice(idx + 1), str[i]);
//       for (let j = i + 1; j < str.length; j++) {
//         if (str[j] === greatest) {
//           [str[idx], str[j]] = [str[j], str[idx]];
//         }
//       }
//     }
//     console.log(str);
//     return -1;
//   },
// };

// I could not implement

// To study later

module.exports = {
  //param A : string
  //return a strings
  solve: function (A) {
    const s = A + '';
    let ci;
    const digits = [];
    for (let i = s.length - 1; i > 0; i--) {
      digits.push(parseInt(A[i]));
      if (A[i] > A[i - 1]) {
        ci = i;
        break;
      }
    }
    if (!ci) return -1;
    digits.sort();
    last = parseInt(s[ci - 1]);
    for (let i = 0; i < digits.length; i++) {
      if (last < digits[i]) {
        nextMin = digits[i];
        digits[i] = last;
        break;
      }
    }

    return s.substring(0, ci - 1) + nextMin + digits.sort().join('');
  },
};
