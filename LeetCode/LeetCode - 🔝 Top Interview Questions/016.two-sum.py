class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        other = {}
        for i in range(0,len(nums)):
            other[nums[i]] = i
        for i in range(0,len(nums)):
            if (target - nums[i]) in other.keys():
                if i != other[target - nums[i]]:
                    return [i,other[target-nums[i]]]
        