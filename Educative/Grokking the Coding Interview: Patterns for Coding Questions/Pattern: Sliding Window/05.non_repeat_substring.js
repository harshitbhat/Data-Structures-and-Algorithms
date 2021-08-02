const non_repeat_substring = function (str) {
  const hash = {};
  let windowStart = 0;
  let ans = -Infinity;
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const ch = str[windowEnd];
    if (!hash[ch]) {
      hash[ch] = 1;
      ans = Math.max(ans, Object.keys(hash).length);
    } else {
      while (hash[ch]) {
        delete hash[str[windowStart]];
        windowStart++;
      }
      hash[ch] = 1;
    }
  }
  return ans;
};

non_repeat_substring('aabccbb');
