class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const checkedNums = new Set();
        for (let i = 0; i < nums.length; i++) {
            if (checkedNums.has(nums[i])) {
                return true;
            }
            checkedNums.add(nums[i]);
        }
        return false;
    }
}
