class Solution:
    def isValid(self, s: str) -> bool:
        stk = []
        for i in s:
            if i == '(' or i == '{' or i == '[':
                stk.append(i)
            if i == ')':
                if len(stk) > 0:
                    if stk[-1] == '(':
                        stk.pop()
                    else:
                        stk.append(i)
                else:
                    stk.append(i)
            if i == ']':
                if len(stk) > 0:
                    if stk[-1] == '[':
                        stk.pop()
                    else:
                        stk.append(i)
                else:
                    stk.append(i)
            if i == '}':
                if len(stk) > 0:
                    if stk[-1] == '{':
                        stk.pop()
                    else:
                        stk.append(i)
                else:
                    stk.append(i)
        return len(stk) == 0