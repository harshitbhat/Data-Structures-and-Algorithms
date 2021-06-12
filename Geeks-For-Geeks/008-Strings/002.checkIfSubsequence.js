// Naive, generate all subsequence and check, O(2^n)

// Iterative
function isSubsequence(s1, s2) {
  let i = 0;
  let j = 0;
  while (i < s1.length && j < s2.length) {
    if (s1[i] === s2[j]) {
      i++;
      j++;
    } else {
      i++;
    }
  }
  return j === s2.length;
}

// Recursive
function isSubsequenceRec(s1, n1, s2, n2) {
  if (n2 === 0) return true;
  if (n1 === 0) return false;
  if (s1[n1 - 1] === s2[n2 - 1]) {
    return isSubsequenceRec(s1, n1 - 1, s2, n2 - 1);
  } else {
    return isSubsequenceRec(s1, n1 - 1, s2, n2);
  }
}

const s1 = 'ABCD';
const s2 = 'AC'; // True

console.log(isSubsequenceRec(s1, s1.length, s2, s2.length));

const s3 = 'ABCDE';
const s4 = 'AED'; // False

console.log(isSubsequenceRec(s3, s3.length, s4, s4.length));
