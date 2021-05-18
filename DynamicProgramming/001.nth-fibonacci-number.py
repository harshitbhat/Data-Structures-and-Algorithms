# F(n) = F(n-1) + F(n-2)

class Solution:
    def nthFibonacci (ob, n):
        dp = [0] * (n+1)
        dp[0] = 0
        dp[1] = 1
        mod = 1000000007
        for i in range(2,n+1):
            dp[i] = (dp[i-1] % mod + dp[i-2] % mod) % mod
        
        return dp[n]