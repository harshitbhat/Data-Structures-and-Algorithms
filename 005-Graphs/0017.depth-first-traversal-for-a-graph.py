'''
Problem Link: https://practice.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1#
'''
class Solution:
    def dfsOfGraph(self, V, adj):
        visited = set()
        stk = []
        ans = []
        
        stk.append(0)
        
        while stk:
            curr = stk.pop()
            
            if curr not in visited:
                ans.append(curr)
                visited.add(curr)
            
            for i in range(len(adj[curr]) - 1, -1, -1):
                node = adj[curr][i]
                if node not in visited:
                    stk.append(node)
        
        return ans