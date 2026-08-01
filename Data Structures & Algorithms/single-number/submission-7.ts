class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums: number[]): number {
        // sortして横の値と比較
        // 数字を小さい順に並べる
        // sortでデータを揃えるのは汎用的に使える手法
        const sortedNums = nums.sort((a, b) => a - b);
        
        // 1つ以上スキップする可能性がある場合、whileを使えばいい
        // forだとi++に縛られる
        let i = 0;
        while (i < sortedNums.length) {
            if (nums[i] === nums[i + 1]) {
                // 検査した2つ分を一気にスキップ
                i = i + 2;
                continue;
            } else {
                // 重複がないということなので、これが答え
                return nums[i];
            }
        }
    }
}
