class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        ans = digits
        i = len(ans) - 1
        carry = 0
        ans[i] += 1
        while i >= 0:
            ans[i] += carry
            carry = ans[i] // 10
            ans[i] = ans[i] % 10    
            i -= 1
        if carry != 0:
            ans.insert(0,carry)
        return ans