class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        sumArray = []
        sumArray.append(nums[0])
        for i in range(1,len(nums)):
            if nums[i] + sumArray[i-1] > nums[i]:
                sumArray.append(nums[i] + sumArray[i-1])
            else:
                sumArray.append(nums[i])
        return max(sumArray)