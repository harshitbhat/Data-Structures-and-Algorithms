class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        def fact(n):
            if n == 0:
                return 1
            ans = 1
            for i in range(1,n+1):
                ans *= i
            return ans
        def C(n,r):
            return fact(n) // (fact(r) * fact(n-r))
        ans = []
        for i in range(0,numRows):
            row = []
            for j in range(0,i+1):
                row.append(C(i,j))
            ans.append(row)
        return ans
            