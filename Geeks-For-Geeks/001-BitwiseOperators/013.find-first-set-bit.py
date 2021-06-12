class Solution:
    
    #Function to find position of first set bit in the given number.
    def getFirstSetBit(self,n):
        ans = 1
        while n:
            if n % 2 != 0:
                return ans
            n = n // 2
            ans += 1
        
        return 0