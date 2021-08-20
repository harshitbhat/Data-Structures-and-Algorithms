class Solution:
	# @param A : list of integers
	# @param B : list of integers
	def merge(self, A, B):
        i = 0
        j = 0
        while i < len(A) and j < len(B):
            if A[i] < B[j]:
                i = i + 1
            else:
                A.insert(i,B[j])
                j = j + 1
        
        while j < len(B):
            A.insert(i,B[j])
            i = i + 1
            j = j + 1
