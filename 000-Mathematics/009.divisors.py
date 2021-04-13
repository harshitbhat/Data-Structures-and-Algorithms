# Naive Approach. Time Complexity: O(n)

def allDivisorsN(n):
    for i in range(1,n+1):
        if n % i == 0:
            print(i, end=' ')
    print(' ')
#allDivisorsN(100)

def allDivisorsE(n):
    i = 1
    while i * i <= n:
        if n % i == 0:
            print(i,end=' ')
            if (i * i) != n:
                print(n//i,end=' ')
        i += 1

#allDivisorsE(25)

# To print in sorted order

def allDivisorsES(n):
    i = 1
    while i * i < n:
        if n % i == 0:
            print(i,end=' ')
        i += 1
    
    while i >= 1:
        if n % i == 0:
            print(n//i,end=' ')
        i -= 1
    print()

allDivisorsES(25)