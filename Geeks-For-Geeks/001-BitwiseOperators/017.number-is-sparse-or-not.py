class Solution:
    
    #Function to check if the number is sparse or not.
    def isSparse(self,n):
        prev = 0
        while n:
            t = n % 2
            if prev == 1 and t == 1:
                return False
            prev = t
            n = n // 2
        
        return True