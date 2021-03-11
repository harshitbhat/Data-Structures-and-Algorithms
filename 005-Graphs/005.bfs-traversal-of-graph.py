'''
Problem Link: https://practice.geeksforgeeks.org/problems/bfs-traversal-of-graph/1
'''
class Solution:
    def bfsOfGraph(self, V, adj):
        visited = set()
        queue = []
        ans = []
        
        queue.append(0)
        visited.add(0)
        
        while queue:
            curr = queue.pop(0)
            ans.append(curr)
            
            for node in adj[curr]:
                if node not in visited:
                    queue.append(node)
                    visited.add(node)
        
        return ans