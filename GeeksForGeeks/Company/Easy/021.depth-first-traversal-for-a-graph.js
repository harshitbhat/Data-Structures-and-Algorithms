/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number[]}
 */
const DFSRec = (graph, src, visited, ans) => {
  visited[src] = true;
  ans.push(src);
  for (const node of graph[src]) {
    if (!visited[node]) {
      DFSRec(graph, node, visited, ans);
    }
  }
};

class Solution {
  //Function to return a list containing the DFS traversal of the graph.
  dfsOfGraph(V, adj) {
    const visited = new Array(V).fill(false);
    const ans = [];
    DFSRec(adj, 0, visited, ans);
    return ans;
  }
}
