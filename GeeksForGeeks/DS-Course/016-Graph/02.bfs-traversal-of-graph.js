/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number[]}
 */

const traverse = (V, graph, src, visited) => {
  const ans = [];
  const queue = [];
  queue.push(src);
  visited[src] = true;
  while (queue.length > 0) {
    const node = queue.shift();
    ans.push(node);
    for (let i = 0; i < graph[node].length; i++) {
      if (!visited[graph[node][i]]) {
        queue.push(graph[node][i]);
        visited[graph[node][i]] = true;
      }
    }
  }
  return ans;
};

class Solution {
  //Function to return Breadth First Traversal of given graph.
  bfsOfGraph(V, adj) {
    const visited = new Array(V).fill(false);
    const ans = traverse(V, adj, 0, visited);
    return ans;
  }
}
