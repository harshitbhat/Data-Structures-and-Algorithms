# Naive - TLE

# class Solution:
#     def digitsInFactorial(self,N):
#         def factIt(n):
#             res = 1
#             for i in range(1,n+1):
#                 res *= i
            
#             return res
#         def countDigits(n):
#             temp = n
#             ans = 0
#             while temp:
#                 temp = temp // 10
#                 ans += 1
#             return ans

#         return countDigits(factIt(N))

# Approach:
# floor value of log base 
# 10 increased by 1, of any number, gives the
# number of digits present in that number.
import math

class Solution:
    def digitsInFactorial(self,N):
        if N < 0:
            return 0
            
        if N == 1:
            return 1
        
        digits = 0
        for i in range(2,N+1):
            digits += math.log10(i)
        
        return math.floor(digits) + 1