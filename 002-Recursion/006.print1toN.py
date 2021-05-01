def print1toN(n):
    if n == 0:
        return
    print1toN(n-1)
    print(n)

def main():
    print1toN(9)

if __name__ == '__main__':
    main()