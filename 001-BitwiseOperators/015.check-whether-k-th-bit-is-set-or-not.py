class Solution:
    
    #Function to check if Kth bit is set or not.
    def checkKthBit(self, n,k):
        return (n >> k & 1) == 1