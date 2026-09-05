class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length === 0) {
            return 0;
        }

        // 0を弾いているので、要素は必ず1以上ある
        const answerSet = new Set<number>([1]);
        // 連続数は必ず1以上なので初期値は1
        let value = 1;

        const sorted = Array.from(new Set(nums)).sort((a, b) => a - b);
        
        for (let i = 1; i < sorted.length; i++) {
            if (sorted[i] - sorted[i - 1] === 1) {
                // 連続した値の場合、連続数を増やす
                value = value + 1;
                answerSet.add(value);
            } else {
                // 連続した値じゃない場合
                // リセットしてまた数える
                value = 1;
            }
        }

        return Math.max(...answerSet);
    }
}
