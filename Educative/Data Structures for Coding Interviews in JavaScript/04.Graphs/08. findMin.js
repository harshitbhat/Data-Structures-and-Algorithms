'use strict';
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');
const Queue = require('./Queue.js');
const Stack = require('./Graph.js');
const Graph = require('./Graph.js');

function findMin(g, source, destination) {
  if (source === destination) return 0;
  const visited = new Array(g.vertices).fill(false);
  const queue = new Queue();
  queue.enqueue([source, 0]);
  visited[source] = true;

  while (!queue.isEmpty()) {
    const front = queue.dequeue();
    let temp = g.list[front[0]].head;
    while (temp) {
      if (!visited[temp.data]) {
        visited[temp.data] = true;
        queue.enqueue([temp.data, front[1] + 1]);
        if (temp.data === destination) return front[1] + 1;
      }
      temp = temp.nextElement;
    }
  }

  return -1;
}
