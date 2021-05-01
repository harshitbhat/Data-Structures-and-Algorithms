def printNto1(n):
    if n == 0:
        return
    print(n)
    printNto1(n-1)

def main():
    printNto1(9)

if __name__ == '__main__':
    main()