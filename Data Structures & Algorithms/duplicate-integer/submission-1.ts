class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // new Set(array)はarray内の重複を排除する
        return new Set(nums).size < nums.length;
    }
}
