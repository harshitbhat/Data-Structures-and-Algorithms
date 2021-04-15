# ---------------------------------------------------------------------------- #
#                 Print n numbers - reverse order via recursion                #
# ---------------------------------------------------------------------------- #

def printNumbers(n):
    if n == 0:
        return 0
    print(n)
    return printNumbers(n-1)

print(printNumbers(10))