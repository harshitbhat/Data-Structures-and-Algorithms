def countSingleOccurance(arr):
    ans = 0
    for i in arr:
        ans = ans ^ i
    
    return ans


arr = [2,2,4,5,6,5,4,6,7]

print(countSingleOccurance(arr))