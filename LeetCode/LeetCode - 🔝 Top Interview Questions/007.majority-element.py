class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        dt = {}
        for i in nums:
            if i in dt.keys():
                dt[i] += 1
            else:
                dt[i] = 1
        for i in dt:
            if dt[i] > len(nums) //2:
                return i