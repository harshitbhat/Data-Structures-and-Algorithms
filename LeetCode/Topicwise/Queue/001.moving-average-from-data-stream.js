/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function (size) {
  this.window = new Array();
  this.maxSize = size;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  if (this.window.length + 1 > this.maxSize) {
    this.window.shift();
  }
  this.window.push(val);
  return this.window.reduce((sum, el) => sum + el, 0) / this.window.length;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
