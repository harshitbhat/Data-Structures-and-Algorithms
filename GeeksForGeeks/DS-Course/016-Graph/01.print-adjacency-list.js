//User function Template for javascript

/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number[][]}
 */
class Solution {
  //Function to return the adjacency list for each vertex.
  printGraph(V, adj) {
    // code here
    const ans = [];
    for (let i = 0; i < V; i++) {
      const node = [];
      node.push(i);
      for (let j = 0; j < adj[i].length; j++) {
        node.push(adj[i][j]);
      }
      ans.push(node);
    }
    return ans;
  }
}

/*

For Input:
5 7
0 1
0 4
1 2
1 3
1 4
2 3
3 4

Your Output is: 
[
  [ '1', '4' ],
  [ '0', '2', '3', '4' ],
  [ '1', '3' ],
  [ '1', '2', '4' ],
  [ '0', '1', '3' ]
]

Output of Online Judge
0-> 1-> 4
1-> 0-> 2-> 3-> 4
2-> 1-> 3
3-> 1-> 2-> 4
4-> 0-> 1-> 3

*/
