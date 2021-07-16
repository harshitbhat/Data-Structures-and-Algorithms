'use strict';
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');
const Stack = require('./Stack.js');
const Graph = require('./Graph.js');
//You can check the input graphs in console tab

//Create Stack => let stack = new Stack(5), where 5 is the size of the stack
//Functions of Stack => stack.push(int), stack.pop(), getTop(), isEmpty()
//class Graph => {int vertices, linkedList[] list}
//class linkedList => {Node head}
//class Node => {int data, Node nextElement}

function dfs(graph, visited, node, res) {
  const stack = new Stack();

  stack.push(node);
  visited[node] = true;

  while (!stack.isEmpty()) {
    const top = stack.pop();
    let temp = graph.list[top].head;
    while (temp) {
      if (visited[temp.data]) {
        res.hasCycle = true;
      } else {
        stack.push(temp.data);
        visited[temp.data] = true;
      }
      temp = temp.nextElement;
    }
  }
}

function detectCycle(g) {
  //Write code here
  const visited = new Array(g.vertices).fill(false);
  const res = { hasCycle: false };
  for (let i = 0; i < g.vertices; i++) {
    if (!visited[i]) {
      dfs(g, visited, i, res);
    }
  }

  return res.hasCycle;
}
