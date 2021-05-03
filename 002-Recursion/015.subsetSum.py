'''
    Time Complexity: O(2^n)
'''
def subsetSum(arr, n, sum):
    if n == 0:
        if sum == 0:
            return 1
        else:
            return 0

    return subsetSum(arr, n - 1, sum) + subsetSum(arr, n - 1, sum - arr[n-1])


def main():
    arr = [10, 5, 2, 3, 6]
    sum = 8
    ans = subsetSum(arr, len(arr), sum)
    print(ans)

if __name__ == '__main__':
    main()