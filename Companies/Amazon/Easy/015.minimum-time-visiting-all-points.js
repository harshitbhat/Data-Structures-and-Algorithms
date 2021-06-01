/**
 * @param {number[][]} points
 * @return {number}
 */

var minTimeToVisitAllPoints = function (points) {
  let ans = 0;
  for (let i = 1; i < points.length; i++) {
    const x1 = points[i][0];
    const y1 = points[i][1];
    const x2 = points[i - 1][0];
    const y2 = points[i - 1][1];
    ans += Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2));
  }
  return ans;
};
