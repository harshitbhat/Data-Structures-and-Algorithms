# Two Loops
def secondLargest2(arr):
    largest = max(arr)
    ans = -1
    for i in range(0,len(arr)):
        if arr[i] != largest:
            if ans == -1:
                ans = i
            elif arr[i] > arr[ans]:
                ans = i
    return ans

#OneLoop
def secondLargest(arr):
    res = -1
    largest = 0
    for i in range(1,len(arr)):
        if arr[i] > arr[largest]:
            res = largest
            largest = i
        elif arr[i] < arr[largest]:
            if res == -1 or arr[i] > arr[res]:
                res = i
    
    return res

arr1 = [10, 5, 8, 20]
arr2 = [20, 10, 20, 8, 12]
arr3 = [10, 10, 10]

print(secondLargest(arr1))
print(secondLargest(arr2))
print(secondLargest(arr3))