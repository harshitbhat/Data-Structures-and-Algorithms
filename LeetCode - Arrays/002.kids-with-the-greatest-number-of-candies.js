/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const ans = [];
  const maxCandies = Math.max(...candies);
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies < maxCandies) {
      ans.push(false);
    } else {
      ans.push(true);
    }
  }

  return ans;
};
