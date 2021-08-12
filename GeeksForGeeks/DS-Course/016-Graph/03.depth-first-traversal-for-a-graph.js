/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number[]}
 */

const dfs = (V, graph, src, visited) => {
  const ans = [];
  const stack = [];
  stack.push(src);

  while (stack.length > 0) {
    const node = stack.pop();

    if (!visited[node]) {
      visited[node] = true;
      ans.push(node);
    }
    for (let i = graph[node].length - 1; i >= 0; i--) {
      const el = graph[node][i];
      if (!visited[el]) {
        stack.push(el);
      }
    }
  }
  return ans;
};

class Solution {
  //Function to return a list containing the DFS traversal of the graph.
  dfsOfGraph(V, adj) {
    const visited = new Array(V).fill(false);
    const ans = dfs(V, adj, 0, visited);
    return ans;
  }
}
