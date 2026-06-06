class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const countMap = new Map();
        for (let num of nums) {
            // すでに同じ名前のnumがMapに登録されている場合はtrueを返す
            if (countMap.has(num)) {
                return true;
            }
            // まだMapに存在しない値はsetしておく
            countMap.set(num, 1);
        }
        return false;
    }
}
