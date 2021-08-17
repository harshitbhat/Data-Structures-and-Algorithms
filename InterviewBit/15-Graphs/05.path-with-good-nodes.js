let ans;

const dfs = (node, count, A, visited, graph, C) => {
  visited[node] = true;
  for (const child of graph[node]) {
    if (!visited[child]) {
      if (A[child - 1] === 1) dfs(child, count + 1, A, visited, graph, C);
      else dfs(child, count, A, visited, graph, C);
    }
  }
  if (graph[node].length === 1 && count <= C) {
    ans++;
  }
};

module.exports = {
  //param A : array of integers
  //param B : array of array of integers
  //param C : integer
  //return an integer
  solve: function (A, B, C) {
    const n = A.length;
    const graph = new Array(n + 1).fill(null).map(() => []);
    const visited = new Array(n + 1).fill(false);
    for (const [u, v] of B) {
      graph[u].push(v);
      graph[v].push(u);
    }
    for (let i = 0; i <= n; i++) {
      console.log(i, ' --> ', graph[i]);
    }
    ans = 0;
    if (A[0] === 1) dfs(1, 1, A, visited, graph, C);
    else dfs(1, 0, A, visited, graph, C);
    return ans;
  },
};

/*
8 1 1 1 0 1 0 1 0 
7 2 8 2 6 3 5 2 3 1 4 2 7 2 2 1 
2


*/
