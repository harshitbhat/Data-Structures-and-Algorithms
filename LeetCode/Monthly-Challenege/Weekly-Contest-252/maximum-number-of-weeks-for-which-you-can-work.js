/**
 * @param {number[]} milestones
 * @return {number}
 */
var numberOfWeeks = function (milestones) {
  if (milestones.length === 1) {
    return 1;
  }
  milestones.sort((a, b) => b - a);
  let ans = 0;
  let i = 0;
  let j = 1;
  let changed = true;
  while (j < milestones.length && i < milestones.length) {
    while (
      milestones[i] <= 0 &&
      i < milestones.length &&
      j < milestones.length
    ) {
      i++;
      j = i + 1;
    }
    if (i >= milestones.length || j >= milestones.length) {
      break;
    }
    let work = Math.min(milestones[i], milestones[j]);
    ans += work;
    milestones[i] -= work;
    milestones[j] -= work;
    j++;
  }
  ans = 2 * ans;
  ans += milestones.some((el) => el > 0) ? 1 : 0;
  console.log(ans);
  return ans;
};

numberOfWeeks([1, 2, 3, 10]);
