/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s) return 0;
  let ans = 0;
  let first = 0;
  const hash = {};
  for (let second = 0; second < s.length; second++) {
    const ch = s[second];
    if (!hash[ch]) {
      hash[ch] = true;
      ans = Math.max(ans, Object.entries(hash).length);
    } else {
      while (hash[ch]) {
        delete hash[s[first]];
        first++;
      }
      hash[ch] = true;
    }
  }
  return ans;
};
