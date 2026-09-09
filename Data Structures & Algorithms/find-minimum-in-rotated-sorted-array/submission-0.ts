class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let min = nums[0];

        for (const num of nums) {
            min = Math.min(num, min);
        }

        return min;
    }
}
