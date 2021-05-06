# Question: https://practice.geeksforgeeks.org/problems/fibonacci-using-recursion/1/?track=DSASP-Recursion&batchId=154

class Solution:
    def fibonacci(self,n):
        #code here
        if n <= 2:
            return 1
        return self.fibonacci(n - 1) + self.fibonacci(n - 2)