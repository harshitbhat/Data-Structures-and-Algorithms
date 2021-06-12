import math
class Solution:    
    #Compelte his function
    def termOfGP(self,A,B,N):
        r = B / A
        return A * math.pow(r,N-1)