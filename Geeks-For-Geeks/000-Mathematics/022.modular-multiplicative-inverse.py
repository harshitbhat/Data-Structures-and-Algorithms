class Solution:    
    ##Complete this function
    def modInverse(self,a,m):
        for x in range(1,m):
            if ((x%m) * (a%m)) % m == 1:
                return x
    
        return -1