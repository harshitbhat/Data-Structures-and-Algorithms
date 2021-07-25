class Solution:
    # @param A : list of integers
    # @param B : integer
    # @return an integer
    def searchInsert(self, arr, B):
        low = 0
        high = len(arr) - 1
        ans = -1

        while low <= high:
            mid = (low + high) // 2
            if arr[mid] == B:
                ans = mid
                break
            elif arr[mid] < B:
                low = mid + 1
            else:
                high = mid - 1

            if arr[low] > B:
                ans = low
                break
            if arr[high] < B:
                ans = high + 1
                break
        
        return ans
