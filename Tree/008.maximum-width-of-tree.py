'''
Problem Link: https://practice.geeksforgeeks.org/problems/maximum-width-of-tree/1#
'''
class Solution:
    def getMaxWidth(self,root):
        '''
        :param root: root of given tree.
        :return: return the Max width of the tree
        '''
        #code here
        if root == None:
            return 0
        q = []
        temp = []
        q.append([root,1]) 
        while q:
            temp.append(q[0][1])
            n = q.pop(0)
            if n[0].left:
                q.append([n[0].left,n[1]+1])
            if n[0].right:
                q.append([n[0].right,n[1]+1])
        h = {}
        for i in temp:
            if i in h.keys():
                h[i] += 1
            else:
                h[i] = 1
        ans = -1
        for i in h:
            ans = max(ans,h[i])
        return ans