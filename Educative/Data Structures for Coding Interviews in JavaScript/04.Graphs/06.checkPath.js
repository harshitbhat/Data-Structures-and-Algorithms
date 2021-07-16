'use strict';
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');
const Stack = require('./Stack.js');
const Graph = require('./Graph.js');
//Perfrom DFS Traversal starting from source and if you reach destination
//then it means that there exist a path between source and destination
//In that case, return true and if you traverse the graph but can't reach
//the destination, then simply return false
function checkPath(g, source, destination) {
  //Write code here

  const visited = new Array(g.vertices).fill(false);
  const stack = new Stack();

  stack.push(source);
  visited[source] = true;

  while (!stack.isEmpty()) {
    const top = stack.pop();
    let temp = g.list[top].head;
    while (temp) {
      if (!visited[temp.data]) {
        stack.push(temp.data);
        visited[temp.data] = true;
      }
      if (temp.data === destination) {
        return true;
      }
      temp = temp.nextElement;
    }
  }
  return false; //return true or false
}
