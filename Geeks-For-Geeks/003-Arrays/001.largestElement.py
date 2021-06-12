def largestElement(arr):
    ans = arr[0]

    for i in range(1,len(arr)):
        if arr[i] > ans:
            ans = arr[i]
    
    return ans


arr = [1,2,40,22,5,6]
print(largestElement(arr))