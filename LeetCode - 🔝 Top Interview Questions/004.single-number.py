class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        # O(n) time and O(n) space
        '''
        dt = {}
        for i in nums:
            if i in dt.keys():
                dt[i] += 1
            else:
                dt[i] = 1
        for i in dt:
            if dt[i] == 1:
                return i
        '''
        # O(n) time and O(1) space using Bitwise operator
        '''
        Explaination:
            # If we take XOR of zero and some bit, it will return that bit
            # a XOR 0 = a, a XOR 0=a
            # If we take XOR of two same bits, it will return 0
            # a XOR a = 0 a XOR a=0
            # a XOR b XOR a = (a XOR a) XOR b = 0 XOR b = b 
            # a⊕b⊕a=(a⊕a)⊕b=0⊕b=b
            # So we can XOR all bits together to find the unique number.
        '''
        ans = 0
        for i in nums:
            ans ^= i
        return ans