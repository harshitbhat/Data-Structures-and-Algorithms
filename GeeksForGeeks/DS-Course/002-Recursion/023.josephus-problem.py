class Solution:
    def josephus(self,n,k):
        def solution(n , k):
            if n == 1:
                return 0
            return (solution( n - 1, k) + k ) % n
    
        ans = solution(n,k)
        return ans + 1