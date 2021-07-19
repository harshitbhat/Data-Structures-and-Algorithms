# Question: https://practice.geeksforgeeks.org/problems/sum-of-digits-of-a-number/1/?track=DSASP-Recursion&batchId=154

class Solution:
    def sumOfDigits(self, n):
        '''
        :param n: given number
        :return: sum of digits of n.
        '''
        if n < 10:
            return n
        
        return n % 10 + self.sumOfDigits( n // 10)