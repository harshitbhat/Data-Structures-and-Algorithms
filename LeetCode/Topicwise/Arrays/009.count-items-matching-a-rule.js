/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  if (ruleKey === 'type') {
    return items.filter((obj) => obj[0] === ruleValue).length;
  }
  if (ruleKey === 'color') {
    return items.filter((obj) => obj[1] === ruleValue).length;
  }
  if (ruleKey === 'name') {
    return items.filter((obj) => obj[2] === ruleValue).length;
  }
};
