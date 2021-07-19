class Solution:
    #You need to complete this function
    def factorial(self,N):
        res = 1
        for i in range(1,N+1):
            res *= i
        return res