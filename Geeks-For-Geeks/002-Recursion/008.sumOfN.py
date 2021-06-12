def sumOfN(n):
    if n == 0:
        return 0
    
    return n + sumOfN(n - 1)

def main():
    ans = sumOfN(10)
    print(ans)

if __name__ == '__main__':
    main()