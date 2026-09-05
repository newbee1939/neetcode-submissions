class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let longest = 0;

        // 重複の排除
        const numSet = new Set(nums);

        for (const num of nums) {
            // まだ一つ前の数字がある場合はSkip
            if (numSet.has(num - 1)) {
                continue;
            }

            // 数える
            let length = 1;
            while (numSet.has(num + length)) {
                length++;
            }

            longest = Math.max(longest, length);
        }

        return longest;
    }
}
