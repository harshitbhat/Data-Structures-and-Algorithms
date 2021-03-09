'''
Problem Link: https://practice.geeksforgeeks.org/problems/parenthesis-checker2744/1#
'''
class Solution:
    '''
    Function Arguments :
    		@param  : s (given string containing parenthesis) 
    		@return : boolean True or False
    '''
    def ispar(self,x):
        stk = []
        for i in x:
            if i == '{' or i == '[' or i == '(':
                stk.append(i)
            else:
                if len(stk) > 0:
                    if i == '}' and stk[-1] == '{':
                        stk.pop()
                    elif i == ']' and stk[-1] == '[':
                        stk.pop()
                    elif i == ')' and stk[-1] == '(':
                        stk.pop()
                    else:
                        return False
                else:
                    stk.append(i)
        return len(stk) == 0