'use strict';
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');
const Stack = require('./Stack.js');
const Graph = require('./Graph.js');
//Create Stack => let stack = new Stack(5), where 5 is the size of the stack
//Functions of Stack => stack.push(int), stack.pop(), getTop(), isEmpty()
//class Graph => {int vertices, linkedList[] list}
//class LinkedList => {Node head}
//class Node => {int data, Node nextElement}

function dfs(graph, visited, node) {
  const stack = new Stack();
  stack.push(node);
  visited[node] = true;
  while (!stack.isEmpty()) {
    const top = stack.pop();
    let temp = graph.list[top].head;
    while (temp) {
      if (!visited[temp.data]) {
        visited[temp.data] = true;
        stack.push(temp.data);
      }
      temp = temp.nextElement;
    }
  }
}

// function findMotherVertex(g) {
//   const result = { motherVertex: -1 };

//   for (let i = 0; i < g.vertices; i++) {
//     const visited = new Array(g.vertices).fill(false);
//     dfs(g, visited, i);
//     result.motherVertex = visited.every((el) => el === true) ? i : -1;
//     if (result.motherVertex !== -1) break;
//   }
//   return result.motherVertex;
// }

// Better

function findMotherVertex(g) {
  const visited = new Array(g.vertices).fill(false);
  let lastV = 0;
  for (let i = 0; i < g.vertices; i++) {
    if (!visited[i]) {
      dfs(g, visited, i);
      lastV = i;
    }
  }

  visited.fill(false);

  dfs(g, visited, lastV);

  return visited.every((el) => el === true) ? lastV : -1;
}
