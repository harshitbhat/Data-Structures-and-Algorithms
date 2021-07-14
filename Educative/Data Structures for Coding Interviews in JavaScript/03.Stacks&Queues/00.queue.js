class Queue {
  constructor() {
    this.items = [];
  }
}

// isEmpty
Queue.prototype.isEmpty = function () {
  return this.items.length === 0;
};

// Get size
Queue.prototype.size = function () {
  return this.items.length;
};

// Get Front
Queue.prototype.getFront = function () {
  if (this.isEmpty()) return null;
  return this.items[0];
};

// Enqueue - Enter the elements from back
Queue.prototype.enqueue = function (element) {
  this.items.push(element);
};

// Dequeue  - remove the front element
Queue.prototype.dequeue = function () {
  if (this.isEmpty()) return null;
  return this.items.shift();
};

/* -------------------------------------------------------------------------- */
/*                                    Test                                    */
/* -------------------------------------------------------------------------- */

var myQueue = new Queue();
console.log('You have successfully created a Queue of size: ' + myQueue.size());
console.log('Enqueue Elements 2,4,6,8,10');
myQueue.enqueue(2);
myQueue.enqueue(4);
myQueue.enqueue(6);
myQueue.enqueue(8);
myQueue.enqueue(10);

console.log('Dequeue(): ' + myQueue.dequeue());
console.log('Dequeue(): ' + myQueue.dequeue());

console.log('getFront(): ' + myQueue.getFront());

console.log('Enqueue Elements 12,14');
myQueue.enqueue(12);
myQueue.enqueue(14);

while (myQueue.isEmpty() == false) {
  console.log('Dequeue(): ' + myQueue.dequeue());
}

console.log('Is queue empty()?: ' + myQueue.isEmpty());
console.log('getTop(): ' + myQueue.getFront());
