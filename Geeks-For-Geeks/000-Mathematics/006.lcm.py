#Naive Approach - Time Complexity: O(a*b - max(a,b))

def lcmN(a,b):
    res = max(a,b)
    while True:
        if res % a == 0 and res % b == 0:
            break
        res += 1
    
    return res

print(lcmN(4,6))

# Efficient Solution: 
# LCM * HCF = a * b

def gcd(a,b):
    if b == 0:
        return a
    return gcd(b, a % b)

def lcm(a,b):
    return (a * b) // gcd(a,b)

print(lcm(4,10))