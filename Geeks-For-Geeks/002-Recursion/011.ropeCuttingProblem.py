# Maximum number of pieces that could be made by cutting to rope of length n in a,b,c size
def ropeCutting(n,a,b,c):
    if n < 0:
        return -1
    if n == 0:
        return 0
    
    ans = max(
        ropeCutting( n-a , a , b , c),
        ropeCutting( n-b , a , b , c),
        ropeCutting( n-c , a , b , c),
    )
    if ans == -1:
        return -1
    return ans + 1 

def main():
    n = 23
    a = 11
    b = 9
    c = 12
    ans = ropeCutting(n,a,b,c)
    print(ans)

if __name__ == '__main__':
    main()