'''
Problem Link: https://practice.geeksforgeeks.org/problems/get-minimum-element-from-stack/1#
'''
class stack:
    def __init__(self):
        self.s=[]
        self.minEle=None

    def push(self,x):
        #CODE HERE
        self.s.append(x)
    def pop(self):
        #CODE HERE
        if len(self.s) == 0:
            return -1
        return self.s.pop()

    def getMin(self):
        #CODE HERE
        if len(self.s) == 0:
            return -1
        return min(self.s)