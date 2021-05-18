'''
Problem Link: https://practice.geeksforgeeks.org/problems/maximum-of-all-subarrays-of-size-k3101/1#
'''
class Solution:
    def max_of_subarrays(self,arr,n,k):
        '''
        you can use collections module here.
        :param a: given array
        :param n: size of array
        :param k: value of k
        :return: A list of required values 
        '''
        #code here
        ans = -1
        ansArr = []
        for i in range(0,k):
            ans = max(ans,arr[i])
        ansArr.append(ans)
        for i in range(1,n-k+1):
            if arr[i-1] == ans or arr[i+k-1] > ans:
                ans = max(arr[i:i+k])
                ansArr.append(ans)
            else:
                ansArr.append(ans)
        return ansArr