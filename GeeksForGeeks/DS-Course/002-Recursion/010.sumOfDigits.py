def sumOfDigits(n):
    if n == 0:
        return 0
    return n % 10 + sumOfDigits(n//10)

def main():
    ans = sumOfDigits(9987)
    print(ans)

if __name__ == '__main__':
    main()