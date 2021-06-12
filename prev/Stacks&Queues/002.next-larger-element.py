'''
Problem Link: https://practice.geeksforgeeks.org/problems/next-larger-element-1587115620/1#
'''
class Solution:
    def nextLargerElement(self,arr,n):
        #O(n^2)
        # ans = []
        # for i in range(0,n):
        #     next = -1
        #     for j in range(i+1,n):
        #         if arr[j] > arr[i]:
        #             next = arr[j]
        #             break
        #     ans.append(next)
        # return ans
        aHash = {}
        stk = []
        stk.append([arr[0],0])
        
        for i in range(1,n):
            next = arr[i]
            if len(stk) > 0:
                while len(stk) > 0 and stk[-1][0] < next:
                    aHash[stk[-1][1]] = next
                    stk.pop()
            stk.append([arr[i],i])
                
        while len(stk) > 0:
            aHash[stk[-1][1]] = -1
            stk.pop()
        ans = []
        for i in aHash:
            ans.append(aHash[i])
        return ans