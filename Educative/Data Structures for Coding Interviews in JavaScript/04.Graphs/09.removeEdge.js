'use strict';
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');
const Graph = require('./Graph.js');
// Access vertex in graph => graph.list[vertex]
// Deletion by value in linked list => linkedlist.deleteVal(value)

function removeEdge(graph, source, dest) {
  if (graph.list.length == 0) {
    return graph;
  }

  if (source >= graph.list.length || source < 0) {
    return graph;
  }

  if (dest >= graph.list.length || dest < 0) {
    return graph;
  }

  graph.list[source].deleteVal(dest);
  return graph;
}
