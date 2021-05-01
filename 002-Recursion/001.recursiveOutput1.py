def fun(n):
    if n == 0:
        return
    print(n)
    fun(n-1)
    print(n)


def main():
    fun(3)

if __name__ == '__main__':
    main()