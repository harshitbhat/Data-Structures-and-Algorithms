import Graph from './graph.js';

function helperFunction(graph, currentNode, visited, result) {
  visited[currentNode] = true;

  if (graph.graph.has(currentNode) == true) {
    var currentAdjacencyList = graph.graph.get(currentNode);
    for (var i = 0; i < currentAdjacencyList.length; i++) {
      var temp = currentAdjacencyList[i];
      if (visited[temp] == false) {
        helperFunction(graph, temp, visited, result);
      }
    }
  }
  result.unshift(currentNode);
}

function topologicalSort(graph) {
  const result = [];

  const visited = new Array(graph.vertices).fill(false);

  for (let currentNode = 0; currentNode < graph.vertices; currentNode++) {
    if (visited[currentNode] === false) {
      helperFunction(graph, currentNode, visited, result);
    }
  }

  return result;
}
