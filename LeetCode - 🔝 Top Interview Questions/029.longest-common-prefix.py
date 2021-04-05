class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        ans = ''
        if len(strs) == 0:
            return ans
        word = strs[0]
        for i in range(len(word)):
            ch = word[i]
            areAllSame = True
            for j in range(1,len(strs)):
                nextWord = strs[j]
                if i < len(nextWord):
                    if nextWord[i] != ch:
                        areAllSame = False
                        break
                else:
                    areAllSame = False
                    break
            if areAllSame:
                ans += ch
            else:
                break
        return ans