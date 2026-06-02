class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numsMap = new Map();
        
        for (let i = 0; i < nums.length; i++) {
            const currentNum = nums[i];
            const diff = target - currentNum;
            
            if (numsMap.has(diff)) {
                return [numsMap.get(diff), i];
            }

            numsMap.set(currentNum, i);
        }

        return [];
    }
}
