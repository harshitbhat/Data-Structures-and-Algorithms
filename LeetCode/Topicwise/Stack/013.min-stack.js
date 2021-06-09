/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = new Array();
  this.minElem = undefined;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.stack.length === 0) {
    this.minElem = val;
  } else {
    if (val < this.minElem) {
      this.minElem = val;
    }
  }
  this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const removed = this.stack.pop();
  if (removed === this.minElem) {
    this.minElem = Math.min(...this.stack);
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minElem;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
