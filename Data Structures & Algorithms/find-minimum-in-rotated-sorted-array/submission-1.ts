class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
                let l = 0;
        let r = nums.length - 1;

        while (l < r) {
            const m = Math.floor((r + l) / 2);

            if (nums[m] < nums[r]) {
                // 答え（最小値）は自分自身 or 左側
                r = m;
            } else {
                // 答え（最小値）は必ず右側のどこか
                l = m + 1;
            }
        }

        // l = r になった（答え）
        return nums[l];
    }
}
