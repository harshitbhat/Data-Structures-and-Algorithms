const isPath = (graph, src, dest) => {
  const visited = new Array(graph.length).fill(false);

  const queue = [];

  queue.push(src);
  visited[src] = true;
  let idx = 0;

  while (idx < queue.length) {
    const node = queue[idx];
    idx++;
    if (node === dest) {
      return true;
    }

    for (const neighbour of graph[node]) {
      if (!visited[neighbour]) {
        visited[neighbour] = true;
        queue.push(neighbour);
      }
    }
  }
  return false;
};

module.exports = {
  //param A : integer
  //param B : array of array of integers
  //return an integer
  // by @harshitbhat
  solve: function (A, B) {
    // Path from 1 to A
    const graph = new Array(A + 1).fill(null).map(() => []);
    for (const edge of B) {
      const u = edge[0];
      const v = edge[1];

      graph[u].push(v);
    }

    return isPath(graph, 1, A) ? 1 : 0;
  },
};
