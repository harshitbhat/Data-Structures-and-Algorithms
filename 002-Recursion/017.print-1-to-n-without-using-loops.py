class Solution:    
    #Complete this function
    def printNos(self,N):
        def print1ToN(n):
            if n == 0:
                return
            print1ToN(n-1)
            print(n, end=' ')
        
        print1ToN(N)