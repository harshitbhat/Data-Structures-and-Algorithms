# Naive Approach
# Time Complexity: O(min(a,b)) ~ O(n)
def gcdN(a,b):
    res = min(a,b)
    while res > 0:
        if a % res == 0 and b % res == 0:
            break
        res -= 1
    return res

print(gcdN(10,13))

# Euclid Algorithm

def gcdE(a,b):
    while a != b:
        if a > b:
            a = a - b
        else:
            b = b - a
    return a

print(gcdE(11,6))

# Optimised implementation - to prevent repeated substraction, we use %
# Time Complexity: O(log(min(a,b)))

def gcd(a,b):
    if b == 0:
        return a
    return gcd(b, a % b)