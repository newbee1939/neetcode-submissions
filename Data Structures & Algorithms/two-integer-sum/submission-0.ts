class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // 絶対効率悪い...
        for (let i = 0; i < nums.length; i++) {
            for (let t = 0; t < nums.length; t++) {
                if (i === t) {
                    continue;
                }

                if (nums[i] + nums[t] === target) {
                    return [i, t];
                }
            }
        }
    }
}
