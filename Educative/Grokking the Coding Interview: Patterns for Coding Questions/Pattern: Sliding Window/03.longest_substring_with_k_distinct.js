const longest_substring_with_k_distinct = function (str, k) {
  const hash = {};
  let ans = -1;
  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    if (hash[str[windowEnd]]) hash[str[windowEnd]]++;
    else hash[str[windowEnd]] = 1;

    const size = Object.keys(hash).length;
    if (size === k) {
      ans = Math.max(ans, windowEnd - windowStart + 1);
    } else if (size > k) {
      hash[str[windowStart]]--;
      if (hash[str[windowStart]] === 0) delete hash[str[windowStart]];
      windowStart++;
    }
  }
  return ans;
};

const res = longest_substring_with_k_distinct('araaci', 4);
console.log(res);
