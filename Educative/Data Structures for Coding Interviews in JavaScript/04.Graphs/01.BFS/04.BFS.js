'use strict';
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');
const Queue = require('./Queue.js');
const Graph = require('./Graph.js');

function bfs(graph, visited, node, result) {
  const queue = new Queue();

  queue.enqueue(node);
  visited[node] = true;

  while (!queue.isEmpty()) {
    const front = queue.dequeue();
    result.ans += front;

    let temp = graph.list[front].head;
    while (temp) {
      if (!visited[temp.data]) {
        queue.enqueue(temp.data);
        visited[temp.data] = true;
      }
      temp = temp.nextElement;
    }
  }
}

//Functions of Queue => queue.enqueue(int), queue.dequeue(), queue.isEmpty()

function bfsTraversal(g) {
  let result = {
    ans: '',
  };
  let num_of_vertices = g.vertices;
  // Write code here

  const visited = new Array(num_of_vertices).fill(false);

  for (let i = 0; i < num_of_vertices; i++) {
    if (!visited[i]) {
      bfs(g, visited, i, result);
    }
  }

  return result.ans;
}
