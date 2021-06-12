class Solution:
    def trailingZeroes(self, n: int) -> int:
        i = 1
        ans = 0
        while (n // (5**i)) != 0:
            ans += n // (5**i)
            i += 1
        return ans