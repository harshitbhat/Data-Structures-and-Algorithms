'use strict';

const LinkedList = require('./00.LinkedList');
const Node = require('./00.Node');

class Graph {
  constructor(vertices) {
    // Total number of vertices
    this.vertices = vertices;
    // An array that will host all the vertices
    this.list = [];
    // Create a new linked list for each vertices
    for (let i = 0; i < this.vertices; i++) {
      let temp = new LinkedList();
      this.list.push(temp);
    }
  }

  // Adding edge - Directional Graph
  addEdge(src, dest) {
    if (src < this.vertices && dest < this.vertices) {
      this.list[src].insertAtHead(dest);
      // If undirectional, add
      //this.list[dest].insertAtHead(src);
    }
  }

  printGraph() {
    console.log('>>Adjacency List of Directed Graph<<');
    for (let i = 0; i < this.vertices; i++) {
      process.stdout.write('|' + String(i) + '| => ');
      let temp = this.list[i].getHead();
      while (temp) {
        process.stdout.write('[' + String(temp.data) + '] -> ');
        temp = temp.nextElement;
      }
      console.log(null);
    }
  }
}

/* -------------------------------------------------------------------------- */
/*                                    Test                                    */
/* -------------------------------------------------------------------------- */

const g = new Graph(4);

g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 3);

g.printGraph();
