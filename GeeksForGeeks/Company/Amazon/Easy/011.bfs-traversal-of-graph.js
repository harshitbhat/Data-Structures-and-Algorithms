// Question Link: https://practice.geeksforgeeks.org/problems/bfs-traversal-of-graph/1/
/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number[]}
 */
class Solution {
  bfs(graph, visited) {
    const ans = [];
    const queue = [];

    queue.push(0);
    visited[0] = true;

    while (queue.length > 0) {
      const front = queue.shift();
      ans.push(front);
      for (const el of graph[front]) {
        if (!visited[el]) {
          queue.push(el);
          visited[el] = true;
        }
      }
    }

    return ans;
  }

  bfsOfGraph(V, adj) {
    const visited = new Array(V).fill(false);
    return this.bfs(adj, visited);
  }
}
