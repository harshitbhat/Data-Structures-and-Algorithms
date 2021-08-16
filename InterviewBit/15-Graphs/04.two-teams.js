const isPossible = (graph, src) => {
  const color = new Array(graph.length).fill(null);

  const queue = [];
  queue.push(src);
  color[src] = true;

  let idx = 0;

  while (idx < queue.length) {
    const node = queue[idx];
    idx++;

    for (const enemy of graph[node]) {
      if (color[enemy] === null) {
        color[enemy] = !color[node];
        queue.push(enemy);
      } else {
        if (color[enemy] === color[node]) {
          return false;
        }
      }
    }
  }

  return true;
};

class Pair {
  constructor(f, s) {
    this.first = f;
    this.second = s;
  }
}

function isBipartite(V, adj) {
  let col = new Array(V + 1);
  for (let i = 0; i <= V; i++) col[i] = -1;

  let q = [];

  for (let i = 1; i <= V; i++) {
    if (col[i] == -1) {
      q.push(new Pair(i, 0));
      col[i] = 0;

      while (q.length != 0) {
        let p = q[0];
        q.shift();

        let v = p.first;

        let c = p.second;

        for (let j of adj[v]) {
          if (col[j] == c) return false;

          if (col[j] == -1) {
            col[j] = c == 1 ? 0 : 1;
            q.push(new Pair(j, col[j]));
          }
        }
      }
    }
  }

  return true;
}

module.exports = {
  solve: function (A, B) {
    const graph = new Array(A + 1).fill(null).map(() => new Array());

    for (const [u, v] of B) {
      graph[u].push(v);
      graph[v].push(u);
    }

    return isBipartite(A, graph) ? 1 : 0;
  },
};

/*

    for (let v = 1; v < graph.length; v++) {
      if (graph[node][v] === true && color[v] === -1) {
        color[v] = 1 - color[node];
        queue.push(v);
      } else if (graph[node][v] === true && color[v] === color[node]) {
        return false;
      }
    }
  }
  return true;

*/
