'use strict';
const Queue = require('./Queue.js');
const Stack = require('./Stack.js');
function reverseK(queue, k) {
  const tempQ = new Queue();
  const tempStk = new Stack();

  for (let i = 0; i < k; i++) {
    tempStk.push(queue.dequeue());
  }
  while (queue.size()) {
    tempQ.enqueue(queue.dequeue());
  }

  while (tempStk.size()) {
    queue.enqueue(tempStk.pop());
  }
  while (tempQ.size()) {
    queue.enqueue(tempQ.dequeue());
  }

  return queue;
}
