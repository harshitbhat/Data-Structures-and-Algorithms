const getCommonPrefix = (s1, s2) => {
  let ans = '';
  let i = 0;
  let j = 0;
  while (i < s1.length && j < s2.length) {
    if (s1[i] !== s2[j]) {
      break;
    }
    ans += s1[i];
    i++;
    j++;
  }
  return ans;
};

module.exports = {
  //param A : array of strings
  //return a strings
  longestCommonPrefix: function (arr) {
    if (arr.length === 1) return arr[0];
    let s1 = arr[0];
    let s2 = arr[1];
    let ans = getCommonPrefix(s1, s2);
    for (let i = 2; i < arr.length; i++) {
      ans = getCommonPrefix(arr[i], ans);
    }
    return ans;
  },
};
