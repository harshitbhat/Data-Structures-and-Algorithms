# Question: https://practice.geeksforgeeks.org/problems/count-total-digits-in-a-number/1/?track=DSASP-Recursion&batchId=154

class Solution:
    def countDigits(self, n):
        '''
        :param n: given number
        :return: count of digits of n.
        '''
        if n < 10:
            return 1
        return 1 + self.countDigits(n // 10)