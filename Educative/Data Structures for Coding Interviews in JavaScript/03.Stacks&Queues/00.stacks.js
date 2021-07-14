class Stack {
  constructor() {
    this.items = [];
    this.top = null;
  }
}
// Is stack empty
Stack.prototype.isEmpty = function () {
  return this.items.length === 0;
};

// Size of stack
Stack.prototype.size = function () {
  return this.items.length;
};

// Get top of array
Stack.prototype.getTop = function () {
  if (this.items.length === 0) {
    return null;
  }
  return this.top;
};

// Push - add elements to stack
Stack.prototype.push = function (element) {
  this.items.push(element);
  this.top = element;
};

// Pop - delete top element
Stack.prototype.pop = function () {
  if (this.items.length === 0) return null;
  if (this.items.length === 1) {
    this.top = null;
    return this.items.pop();
  }
  this.top = this.items[this.items.length - 2];
  return this.items.pop();
};

/* -------------------------------------------------------------------------- */
/*                                    Test                                    */
/* -------------------------------------------------------------------------- */
const myStack = new Stack();
