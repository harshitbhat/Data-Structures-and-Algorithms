/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let ans = -1;
  for (let person of accounts) {
    let wealth = 0;
    for (let amount of person) {
      wealth += amount;
    }
    ans = Math.max(ans, wealth);
  }
  return ans;
};
