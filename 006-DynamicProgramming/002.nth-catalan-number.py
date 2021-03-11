# Catalan Number:
#  C(0) = 0 
#  C(n) = summation(0 to n) - C(i)C(n-i)

class Solution:
    def findCatalan(self,n):
        dp = [0] * (n+1)
        dp[0] = 1
        dp[1] = 1
        for i in range(2,n+1):
            for j in range(0,i):
                dp[i] += dp[j] * dp[i-j-1]
        
        return dp[n]