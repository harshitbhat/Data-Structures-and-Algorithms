def powerSet(s):
    n = len(s)
    size = 2 ** n
    for i in range(0,size):
        for j in range(0,n):
            if i & (1 << j) != 0:
                print(s[j],end='')
        print()


powerSet('abc')