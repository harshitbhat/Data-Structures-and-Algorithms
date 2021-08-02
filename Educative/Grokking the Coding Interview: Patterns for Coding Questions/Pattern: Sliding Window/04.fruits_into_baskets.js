const fruits_into_baskets = function (fruits) {
  const hash = {};
  let windowStart = 0;
  let ans = -Infinity;
  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    if (hash[fruits[windowEnd]]) {
      hash[fruits[windowEnd]]++;
    } else {
      hash[fruits[windowEnd]] = 1;
    }

    if (Object.keys(hash).length > 2) {
      while (Object.keys(hash).length > 2) {
        hash[fruits[windowStart]]--;
        if (hash[fruits[windowStart]] === 0) {
          delete hash[fruits[windowStart]];
        }
        windowStart++;
      }
    } else {
      ans = Math.max(ans, windowEnd - windowStart + 1);
    }
  }

  return ans;
};
