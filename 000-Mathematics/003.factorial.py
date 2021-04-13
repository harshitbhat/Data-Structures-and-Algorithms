
# Iterative solution - Time Complexity: O(n), Space Complexity: O(1)

def factIt(n):
    res = 1
    for i in range(1,n+1):
        res *= i
    
    return res

print(factIt(7))

# Recursive SOlution - Time Complexity: O(n), Space Complexity: O(n)

def factRec(n):
    if n <= 1:
        return 1
    return n * factRec(n-1)

print(factRec(7))