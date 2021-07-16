'use strict';
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');
const Graph = require('./Graph.js');
//You can check the input graphs in console tab

function checkCycle(graph, node, visited, parent) {
  visited[node] = true;

  let adjacent = graph.list[node].head;
  while (adjacent) {
    if (!visited[adjacent.data]) {
      if (checkCycle(graph, adjacent.data, visited, node)) {
        return true;
      }
    } else if (adjacent.data !== parent) {
      return true;
    }
    adjacent = adjacent.nextElement;
  }
  return false;
}

function isTree(g) {
  // Write code here
  const visited = new Array(g.vertices).fill(false);

  if (checkCycle(g, 0, visited, -1)) {
    return false;
  }

  return visited.every((el) => el === true);
}
