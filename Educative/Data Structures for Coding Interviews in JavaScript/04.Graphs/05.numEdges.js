'use strict';
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');
const Graph = require('./Graph.js');
//class Graph => {int vertices, linkedList[] list}
//class linkedList => {Node head}
//class Node => {int data, Node nextElement}
function numEdges(g) {
  let sum = 0;
  //Write code here
  for (let i = 0; i < g.vertices; i++) {
    let temp = g.list[i].head;
    let connected = 0;
    while (temp) {
      connected++;
      temp = temp.nextElement;
    }
    sum += connected;
  }
  return Math.floor(sum / 2);
}
