'''
Problem Link: https://practice.geeksforgeeks.org/problems/print-adjacency-list-1587115620/1
'''
class Solution:
    def printGraph(self, V, adj):
        ans = []
        for i in range(0,V):
            ans.append([i] + adj[i])
        return ans