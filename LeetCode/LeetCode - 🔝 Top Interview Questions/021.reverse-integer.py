class Solution:
    def reverse(self, x: int) -> int:
        k = abs(x)
        ans = 0
        while k:
            ans = (ans * 10) + k % 10
            k = k // 10
        if ans < (-1 * (2**31)) or ans > (2**31 - 1):
            return 0
        if x < 0:
            return ans * -1
        return ans