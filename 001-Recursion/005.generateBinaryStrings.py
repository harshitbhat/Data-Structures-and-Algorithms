# ---------------------------------------------------------------------------- #
#                    Generate all binary strings with n bits                   #
# ---------------------------------------------------------------------------- #
# It involves backtracking

def appendAtBeginning(x, arr):
    return [x + elem for elem in arr]
def bitStrings(n):
    if n == 0:
        return []
    if n == 1:
        return ['0','1']
    return (appendAtBeginning('0', bitStrings(n-1)) + appendAtBeginning('1',bitStrings(n-1)))

print(bitStrings(3))

# ---------------------------------------------------------------------------- #
#                            Time Complexity: O(n^2)                           #
# ---------------------------------------------------------------------------- #