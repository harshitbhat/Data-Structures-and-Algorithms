'use strict';
const LinkedList = require('./LinkedList.js');
const Node = require('./00.Node');
const Stack = require('./02.Stack');
const Graph = require('./03.Graph');

//Functions of Stack => stack.push(int),stack.pop(),top(),isEmpty()
function dfs(graph, visited, node, result) {
  const stack = new Stack();
  stack.push(node);
  visited[node] = true;

  while (!stack.isEmpty()) {
    const top = stack.pop();
    result.ans += top;

    let temp = graph.list[top].head;
    while (temp) {
      if (!visited[temp.data]) {
        stack.push(temp.data);
        visited[temp.data] = true;
      }
      temp = temp.nextElement;
    }
  }
}

function dfsTraversal(g) {
  let result = { ans: '' };
  let num_of_vertices = g.vertices;

  const visited = new Array(num_of_vertices).fill(false);
  for (let i = 0; i < num_of_vertices; i++) {
    if (!visited[i]) {
      dfs(g, visited, i, result);
    }
  }

  return result.ans;
}
