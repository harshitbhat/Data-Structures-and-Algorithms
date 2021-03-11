'''
Problem Link: https://practice.geeksforgeeks.org/problems/path-in-matrix3805/1
'''
class Solution:
    def maximumPath(self, N, Matrix):
        def withinBounds(i,j):
            return i >= 0 and i < N and j >= 0 and j <N
        dp = [[0 for i in range(N)] for i in range(N)]
        
        for i in range(N):
            dp[0][i] = Matrix[0][i]
        
        for i in range(1,N):
            for j in range(0,N):
                if j == 0:
                    dp[i][j] = Matrix[i][j] + max(dp[i-1][j],dp[i-1][j+1])
                elif j == N-1:
                    dp[i][j] = Matrix[i][j] + max(dp[i-1][j-1],dp[i-1][j])
                else:
                    dp[i][j] = Matrix[i][j] + max(dp[i-1][j-1],dp[i-1][j],dp[i-1][j+1])
        
        return max(dp[N-1])