import math

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


def primeFactorsN(n):
    for i in range(2,math.ceil(math.sqrt(n))):
        if checkPrimes(i) and n % i == 0:
            while n % i == 0:
                print(i,end=' ')
                n = n // i
    if n != 1:
        print(n,end=' ')
    print()
primeFactorsN(84)


# Optimised

def primeFactors(n):
    if n <= 1:
        return
    while n % 2 == 0:
        print(2,end=' ')
        n = n // 2
    while n % 3 == 0:
        print(3,end=' ')
        n = n // 3
    i = 5
    while i * i <= n:
        while n % i == 0:
            print(i,end=' ')
            n = n// i
        while n % (i+2) == 0:
            print(i+2,end=' ')
            n = n// (i+2)
    print()
    if n > 3:
        print(n)

primeFactors(1000)