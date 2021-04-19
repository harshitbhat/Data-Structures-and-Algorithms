class Solution:
    ##Complete this function
    # Function to find number of bits needed to be flipped to convert A to B
    def countBitsFlip(self,a,b):
        x = a ^ b
        ans = 0
        while x:
            x = x & (x - 1)
            ans += 1
        return ans