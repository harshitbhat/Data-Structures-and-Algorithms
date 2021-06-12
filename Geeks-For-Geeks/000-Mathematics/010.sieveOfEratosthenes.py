# Naive Approach - Time Complexity O(n * sqrt(n))

def checkPrime(n):
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

def printPrimesN(n):
    for i in range(1,n+1):
        if checkPrime(i):
            print(i,end=' ')
    print()


#printPrimesN(23)


# Seive - boolen array - Time Complexity: O(n log log n)

def seive(n):
    primes = [True] * (n+1)
    primes[0] = primes[1] = False

    i = 2

    while i * i <= n:
        if primes[i]:
            j = i * i # use i * i, to optimise, it was j = 2 * i
            while j <= n:
                primes[j] = False
                j += i
        i += 1

    for i in range(0,n+1):
        if primes[i]:
            print(i,end=' ')
    print()




seive(13)