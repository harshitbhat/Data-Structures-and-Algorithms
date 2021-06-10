var RecentCounter = function () {
  this.requests = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.requests.push(t);
  let ans = 0;
  for (let i = this.requests.length - 1; i >= 0; i--) {
    if (t - this.requests[i] <= 3000) {
      ans++;
    }
  }
  return ans;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
