'''
Problem Link: https://practice.geeksforgeeks.org/problems/queue-using-two-stacks/1
'''

def Push(x,stack1,stack2):
    '''
    x: value to push
    stack1: list
    stack2: list
    '''
    #code here
    stack1.append(x)
    
def Pop(stack1,stack2):
    
    '''
    stack1: list
    stack2: list
    '''
    if len(stack1) == 0:
        return -1
    while stack1:
        stack2.append(stack1.pop())
    ans = stack2.pop()
    while stack2:
        stack1.append(stack2.pop())
    return ans