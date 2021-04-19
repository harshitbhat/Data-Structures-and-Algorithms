class Solution:
    
    #Function to find the first position with different bits.
    def posOfRightMostDiffBit(self,m,n):
        x = m ^ n
        ans = 1
        while x:
            if x % 2 == 1:
                return ans
            x = x // 2
            ans += 1
        
        return -1