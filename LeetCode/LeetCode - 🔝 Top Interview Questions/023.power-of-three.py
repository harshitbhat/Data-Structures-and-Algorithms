class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        check = {}
        for i in range(0,25):
            check[3**i] = True
        return n in check.keys()