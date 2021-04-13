import math
class Solution:
	def quadraticRoots(self, a, b, c):
        D = (b * b - (4 * a * c))
        if D < 0:
            return [-1]
        d = (math.sqrt(D))
        
        x1 = math.floor((-1 * b + d ) / (2*a))
        x2 = math.floor((-1 * b - d ) / (2*a))
        
        return [max(x1,x2),min(x1,x2)]