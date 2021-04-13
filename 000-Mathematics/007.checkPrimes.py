import math
# Naive Approach, check for every number till n, 
# Time Complexity: O(n)

def checkPrimeN(n):
    if n == 1:
        return False
    for i in range(2,n):
        if n % i == 0:
            return False
    return True

print(checkPrimeN(6))


# Efficient approach - Time Complexity: O(sqrt(n))

def checkPrimesEff(n):
    if n == 1:
        return False
    
    for i in range(2,math.ceil(math.sqrt(n))):
        if n % i == 0:
            return False

    return True

print(checkPrimesEff(15))

# Most efficient

def checkPrimes(n):
    if n == 1:
        return False
    if n == 2 or n == 3:
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False
    
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i+2) == 0:
            return False
        i += 6
    
    return True


print(checkPrimes(21))