class Solution:
    def hammingWeight(self, n: int) -> int:
        ans = bin(n).replace("0b", "")
        return ans.count('1')