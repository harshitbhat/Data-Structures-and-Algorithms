function isCyclicUtil(graph, visited, node) {
  const parent = new Array(graph.length).fill(-1);
  const queue = [];
  visited[node] = true;
  queue.push(node);
  let idx = 0;

  while (idx < queue.length) {
    const u = queue[idx];
    idx++;

    for (let i = 0; i < graph[u].length; i++) {
      const v = graph[u][i];
      if (!visited[v]) {
        visited[v] = true;
        queue.push(v);
        parent[v] = u;
      } else if (parent[u] !== v) {
        return true;
      }
    }
  }
  return false;
}

function isCyclic(graph) {
  const n = graph.length;
  const visited = new Array(n).fill(false);
  for (let i = 1; i < n; i++) {
    if (!visited[i]) {
      if (isCyclicUtil(graph, visited, i)) {
        return true;
      }
    }
  }
  return false;
}

module.exports = {
  //param A : integer
  //param B : array of array of integers
  //return an integer
  solve: function (A, B) {
    const graph = new Array(A + 1).fill(null).map(() => []);
    for (const [u, v] of B) {
      graph[u].push(v);
      graph[v].push(u);
    }
    return isCyclic(graph) ? 1 : 0;
  },
};
